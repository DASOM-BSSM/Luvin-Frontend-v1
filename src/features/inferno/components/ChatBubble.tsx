import { Text, View } from 'react-native';

import type { ChatRoom, ChatSender, ChatStatus } from '@/src/features/inferno/types';

interface ChatBubbleProps {
  room: ChatRoom;
  sender?: ChatSender;
  status?: ChatStatus;
  text?: string;
}

const ROOM_ME_BG: Record<ChatRoom, string> = {
  oven: 'bg-brown-400',
  trolley: 'bg-yellow-400',
};

export default function ChatBubble({
  room,
  sender = 'people',
  status = 'before',
  text = '채팅채팅채팅채팅입니당',
}: ChatBubbleProps) {
  const isMe = sender === 'me';
  const isNow = status === 'now';

  const roundedClassName = isNow
    ? isMe
      ? 'rounded-tl-chat rounded-tr-chat rounded-bl-chat'
      : 'rounded-tl-chat rounded-tr-chat rounded-br-chat'
    : 'rounded-chat';

  const backgroundClassName = isMe ? ROOM_ME_BG[room] : 'bg-neutral-200';
  const textClassName = isMe ? 'text-default-bg' : 'text-text-primary';

  return (
    <View
      className={`self-start items-start gap-1 px-4 py-2.5 ${backgroundClassName} ${roundedClassName}`}
    >
      <Text className={`font-yde-street-light text-body-s ${textClassName}`}>{text}</Text>
    </View>
  );
}
