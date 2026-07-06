import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';
import { View } from 'react-native';

cssInterop(Image, { className: 'style' });

interface TrolleyIllustrationProps {
  className?: string;
}

export default function TrolleyIllustration({
  className = 'w-36 h-32',
}: TrolleyIllustrationProps) {
  return (
    <View className={className}>
      <Image
        source={require('@/src/assets/images/trolley.png')}
        contentFit="contain"
        className="h-full w-full"
      />
    </View>
  );
}
