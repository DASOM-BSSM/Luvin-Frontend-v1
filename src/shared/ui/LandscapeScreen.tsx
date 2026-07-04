import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LandscapeScreenProps {
  children: ReactNode;
}

export default function LandscapeScreen({ children }: LandscapeScreenProps) {
  const { width, height } = useWindowDimensions();

  return (
    <View className="flex-1 items-center justify-center bg-default-bg">
      <StatusBar hidden />
      <View style={{ width: height, height: width, transform: [{ rotate: '90deg' }] }}>
        <SafeAreaView className="flex-1" edges={['top', 'bottom', 'left', 'right']}>
          {children}
        </SafeAreaView>
      </View>
    </View>
  );
}
