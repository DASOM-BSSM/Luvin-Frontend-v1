import { Slot } from 'expo-router';

import ThemeProvider from '@/src/providers/theme-provider';

import '@/src/shared/styles/global.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
