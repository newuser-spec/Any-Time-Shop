import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { OtpVerification } from '@/components/OtpVerification';

interface SignInProps {
  onLogin: (email: string, password: string) => Promise<boolean>;
}

const SignIn = ({ onLogin }: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loginMethod === 'password') {
      if (!email || !password) return;
      
      setIsLoading(true);
      try {
        const success = await onLogin(email, password);
        if (success) {
          navigate('/');
        }
      } catch (error) {
        console.error('Login failed:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Handle OTP login
      if (!phone) return;
      setShowOtp(true);
    }
  };

  const handleVerifyOtp = async (otp: string) => {
    // In a real app, verify OTP with your backend
    console.log('Verifying OTP:', otp);
    // For demo purposes, just log in with a mock user
    const success = await onLogin('demo@example.com', 'password');
    if (success) {
      navigate('/');
    }
    return success;
  };

  const handleResendOtp = async () => {
    // In a real app, resend OTP
    console.log('Resending OTP to:', phone);
    return true;
  };

  if (showOtp) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <OtpVerification
            phone={phone}
            onVerify={handleVerifyOtp}
            onResend={handleResendOtp}
            onBack={() => setShowOtp(false)}
          />
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-700">
              <p className="font-medium">Development Mode</p>
              <p>Check your browser console for the OTP.</p>
              <p className="mt-2 font-mono bg-black text-white p-2 rounded">
                {otpStorage.get(phone) || 'No OTP found. Try sending again.'}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/signup" className="font-medium text-fresh-green hover:text-green-600">
              create a new account
            </Link>
          </p>
        </div>

        <div className="flex rounded-md shadow-sm mb-4">
          <button
            type="button"
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-md ${loginMethod === 'password' ? 'bg-fresh-green text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            onClick={() => setLoginMethod('password')}
          >
            Email & Password
          </button>
          <button
            type="button"
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-md ${loginMethod === 'otp' ? 'bg-fresh-green text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            onClick={() => setLoginMethod('otp')}
          >
            Phone OTP
          </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {loginMethod === 'password' ? (
              <>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-fresh-green focus:border-fresh-green focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-fresh-green focus:border-fresh-green focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-fresh-green focus:border-fresh-green focus:z-10 sm:text-sm"
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            )}
          </div>

          {loginMethod === 'password' && (
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-fresh-green hover:text-green-600">
                  Forgot your password?
                </Link>
              </div>
            </div>
          )}

          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-fresh-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fresh-green"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  {loginMethod === 'password' ? 'Signing in...' : 'Sending OTP...'}
                </>
              ) : loginMethod === 'password' ? (
                'Sign in'
              ) : (
                'Send OTP'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
