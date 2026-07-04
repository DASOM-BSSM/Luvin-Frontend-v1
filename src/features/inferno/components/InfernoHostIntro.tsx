import { View } from 'react-native';

import AvatarCharacter from '@/src/shared/ui/AvatarCharacter';
import CommentBubble from '@/src/shared/ui/CommentBubble';

interface InfernoHostIntroProps {
  message: string | string[];
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
  const messages = Array.isArray(message) ? message : [message];

  return (
    <View className={`${className} flex-row items-center self-center`}>
      <AvatarCharacter className={avatarClassName} />
      <View className="flex-1 gap-2">
        {messages.map((line) => (
          <CommentBubble
            key={line}
            text={line}
            className={bubbleClassName}
            textClassName={textClassName}
          />
        ))}
      </View>
    </View>
  );
}
