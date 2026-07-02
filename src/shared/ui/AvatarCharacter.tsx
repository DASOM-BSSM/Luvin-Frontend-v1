import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';
import { View } from 'react-native';

cssInterop(Image, { className: 'style' });

interface AvatarCharacterProps {
  className?: string;
}

export default function AvatarCharacter({ className = 'w-[28%] aspect-[7/9]' }: AvatarCharacterProps) {
  return (
    <View className={className}>
      <Image
        source={require('@/src/assets/images/avatar.png')}
        contentFit="contain"
        className="h-full w-full"
      />
    </View>
  );
}
