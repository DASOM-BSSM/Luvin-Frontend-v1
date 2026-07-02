import { View } from 'react-native';

import AvatarCharacter from '@/src/shared/ui/AvatarCharacter';
import CommentBubble from '@/src/shared/ui/CommentBubble';

interface InfernoHostIntroProps {
  message: string;
  className?: string;
  avatarClassName?: string;
  bubbleClassName?: string;
  textClassName?: string;
}

export default function InfernoHostIntro({
  message,
  className = 'w-[87.5%]',
  avatarClassName = 'w-[30.7%] aspect-[86/128.2]',
  bubbleClassName = 'flex-1 self-auto rounded-br-chat rounded-tl-chat rounded-tr-chat px-[11%] py-3',
  textClassName = 'text-body-xs',
}: InfernoHostIntroProps) {
  return (
    <View className={`${className} flex-row items-center self-center`}>
      <AvatarCharacter className={avatarClassName} />
      <CommentBubble
        text={message}
        className={bubbleClassName}
        textClassName={textClassName}
      />
    </View>
  );
}
