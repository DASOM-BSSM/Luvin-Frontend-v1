import { Slot } from 'expo-router';

import ThemeProvider from '@/src/providers/theme-provider';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
