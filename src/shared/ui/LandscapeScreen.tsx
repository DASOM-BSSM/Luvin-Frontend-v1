import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useLandscapeScreenOrientation } from '@/src/providers/screen-orientation-provider';

interface LandscapeScreenProps {
  children: ReactNode;
}

export default function LandscapeScreen({ children }: LandscapeScreenProps) {
  useLandscapeScreenOrientation();

  return (
    <View className="flex-1 items-center justify-center bg-default-bg">
      <StatusBar hidden />
      <SafeAreaView className="flex-1" edges={['top', 'bottom', 'left', 'right']}>
        {children}
      </SafeAreaView>
    </View>
  );
}
