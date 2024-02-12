import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionictesting',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    allowNavigation:['*']
  },
  plugins: {
    LiveUpdates: {
      appId: 'e29855fb',
      channel: 'development',
      autoUpdateMethod: 'none',
      maxVersions: 2
    }
  }
};

export default config;
