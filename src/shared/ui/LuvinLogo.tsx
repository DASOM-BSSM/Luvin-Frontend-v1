import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';
import { View } from 'react-native';

cssInterop(Image, { className: 'style' });

interface LuvinLogoProps {
  className?: string;
}

export default function LuvinLogo({ className = 'w-[21%] aspect-[67/28]' }: LuvinLogoProps) {
  return (
    <View className={className}>
      <Image
        source={require('@/src/assets/images/logo.png')}
        contentFit="contain"
        className="h-full w-full"
      />
    </View>
  );
}
