import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';

export function lockScreenOrientation(orientationLock: ScreenOrientation.OrientationLock) {
  void ScreenOrientation.lockAsync(orientationLock).catch(() => undefined);
}

export default function useScreenOrientationLock(orientationLock: ScreenOrientation.OrientationLock) {
  useEffect(() => {
    lockScreenOrientation(orientationLock);
  }, [orientationLock]);
}
