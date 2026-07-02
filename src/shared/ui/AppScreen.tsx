import type { ReactNode } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AppScreenProps {
  children: ReactNode;
  footer?: ReactNode;
}

export default function AppScreen({ children, footer }: AppScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-default-bg" edges={['top', 'bottom', 'left', 'right']}>
      <View className="flex-1 items-center">
        <View className="h-[2.4%]" />
        <View className="w-[85%] flex-1">{children}</View>
        {footer}
        <View className="h-[1%]" />
      </View>
    </SafeAreaView>
  );
}
