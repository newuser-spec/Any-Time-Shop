import twilio from 'twilio';

// Initialize Twilio client with environment variables
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendOtpSms = async (to: string, otp: string): Promise<boolean> => {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEV] OTP for ${to}: ${otp}`);
      return true;
    }

    await client.messages.create({
      body: `Your AnyTimeShop verification code is: ${otp}. Valid for 10 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to
    });
    
    return true;
  } catch (error) {
    console.error('Failed to send OTP via SMS:', error);
    return false;
  }
};
