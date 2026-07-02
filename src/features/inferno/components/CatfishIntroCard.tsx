import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';
import { View } from 'react-native';

import CommentBubble from '@/src/shared/ui/CommentBubble';

cssInterop(Image, { className: 'style' });

interface CatfishIntroCardProps {
  message: string;
}

export default function CatfishIntroCard({ message }: CatfishIntroCardProps) {
  return (
    <View className="w-[700px] flex-row items-center gap-5">
      <View className="h-[110px] w-[74px] shrink-0">
        <Image
          source={require('@/src/assets/images/avatar.png')}
          contentFit="contain"
          className="w-full h-full"
        />
      </View>
      <View className="flex-1 items-start">
        <CommentBubble text={message} align="left" />
      </View>
    </View>
  );
}
