import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ff500d7c489244e8a46e825af2f83bea',
  appName: 'AnyTimeShop',
  webDir: 'dist',
  server: {
    url: 'https://ff500d7c-4892-44e8-a46e-825af2f83bea.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#22c55e',
      showSpinner: false
    }
  }
};

export default config;