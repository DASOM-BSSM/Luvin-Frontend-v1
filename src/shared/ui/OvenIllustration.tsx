import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';
import { View } from 'react-native';

cssInterop(Image, { className: 'style' });

interface OvenIllustrationProps {
  className?: string;
}

export default function OvenIllustration({ className = 'w-40 h-28' }: OvenIllustrationProps) {
  return (
    <View className={className}>
      <Image source={require('@/src/assets/images/oven.png')} contentFit="contain" className="h-full w-full" />
    </View>
  );
}
