import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';
import { View } from 'react-native';

cssInterop(Image, { className: 'style' });

interface ButterCharacterProps {
  className?: string;
}

export default function ButterCharacter({ className = 'w-24 h-16' }: ButterCharacterProps) {
  return (
    <View className={className}>
      <Image
        source={require('@/src/assets/images/butter.png')}
        contentFit="contain"
        className="w-full h-full"
      />
    </View>
  );
}
