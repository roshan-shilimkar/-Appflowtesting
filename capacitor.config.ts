import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionictesting',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: 'FILL-ME-IN',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
