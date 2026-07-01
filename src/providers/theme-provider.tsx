import { useEffect, type ReactNode } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

void SplashScreen.preventAutoHideAsync();

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [fontsLoaded] = useFonts({
    YdeStreetBold: require('../assets/fonts/YdestreetB.ttf'),
    YdeStreetLight: require('../assets/fonts/YdestreetL.ttf'),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      return;
    }

    void SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return children;
}
