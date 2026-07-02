import { Redirect, Slot, type Href, useSegments } from 'expo-router';

import ThemeProvider from '@/src/providers/theme-provider';
import { useAuthStore } from '@/src/shared/store/auth.store';

import '@/src/shared/styles/global.css';

const HOME_ROUTE = '/' as Href;
const ONBOARDING_ROUTE = '/onboarding' as Href;

function AuthGate() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const segments = useSegments();
  const isOnboardingRoute = segments[0] === 'onboarding';

  if (!isAuthenticated && !isOnboardingRoute) {
    return <Redirect href={ONBOARDING_ROUTE} />;
  }

  if (isAuthenticated && isOnboardingRoute) {
    return <Redirect href={HOME_ROUTE} />;
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthGate />
    </ThemeProvider>
  );
}
