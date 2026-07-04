import { Redirect, Slot, type Href, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';

import ThemeProvider from '@/src/providers/theme-provider';
import { useAuthStore } from '@/src/shared/store/auth.store';

import '@/src/shared/styles/global.css';

const HOME_ROUTE = '/(tabs)' as Href;
const ONBOARDING_ROUTE = '/onboarding' as Href;

function AuthGate() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const segments = useSegments();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const unsub = useAuthStore.persist.onFinishHydration(() => setIsHydrated(true));
    if (useAuthStore.persist.hasHydrated()) setIsHydrated(true);
    return unsub;
  }, []);

  if (!isHydrated) return null;

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