import { Text, View } from 'react-native';

interface CommentBubbleProps {
  text: string;
  align?: 'left' | 'right';
}

export default function CommentBubble({ text, align = 'left' }: CommentBubbleProps) {
  return (
    <View
      className={`self-start items-start gap-1 rounded-tl-chat rounded-tr-chat bg-neutral-200 px-7.5 py-3 ${
        align === 'right' ? 'rounded-bl-chat' : 'rounded-br-chat'
      }`}
    >
      <Text className="font-yde-street-light text-body-m text-text-primary">{text}</Text>
    </View>
  );
}
