import * as ScreenOrientation from 'expo-screen-orientation';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import useScreenOrientationLock, { lockScreenOrientation } from '@/src/shared/hooks/useScreenOrientationLock';

interface ScreenOrientationProviderProps {
  children: ReactNode;
}

interface ScreenOrientationContextValue {
  registerLandscapeScreen: () => () => void;
}

const ScreenOrientationContext = createContext<ScreenOrientationContextValue | null>(null);

export default function ScreenOrientationProvider({ children }: ScreenOrientationProviderProps) {
  const [landscapeScreenCount, setLandscapeScreenCount] = useState(0);
  const orientationLock =
    landscapeScreenCount > 0
      ? ScreenOrientation.OrientationLock.LANDSCAPE
      : ScreenOrientation.OrientationLock.PORTRAIT_UP;

  useScreenOrientationLock(orientationLock);

  const registerLandscapeScreen = useCallback(() => {
    setLandscapeScreenCount((count) => count + 1);

    return () => {
      setLandscapeScreenCount((count) => Math.max(0, count - 1));
    };
  }, []);

  const value = useMemo(() => ({ registerLandscapeScreen }), [registerLandscapeScreen]);

  return <ScreenOrientationContext.Provider value={value}>{children}</ScreenOrientationContext.Provider>;
}

export function useLandscapeScreenOrientation() {
  const context = useContext(ScreenOrientationContext);

  useEffect(() => {
    if (!context) {
      lockScreenOrientation(ScreenOrientation.OrientationLock.LANDSCAPE);

      return () => {
        lockScreenOrientation(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      };
    }

    return context.registerLandscapeScreen();
  }, [context]);
}
