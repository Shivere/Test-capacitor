import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ke.co.litemore.zanalytics',
  appName: 'capacitor-app',
  webDir: 'dist/capacitor-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
