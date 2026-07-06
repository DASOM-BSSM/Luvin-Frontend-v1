import { Text, View } from 'react-native';

import type { ChatRoom, InfernoChatMessage } from '@/src/features/inferno/types';

interface InfernoChatListProps {
  messages: InfernoChatMessage[];
  room: ChatRoom;
}

const ROOM_ME_BG: Record<ChatRoom, string> = {
  oven: 'bg-brown-400',
  trolley: 'bg-yellow-400',
};

function ChatMessageRow({ message, room }: { message: InfernoChatMessage; room: ChatRoom }) {
  return (
    <View className={`gap-1 ${message.mine ? 'items-end' : 'items-start'}`}>
      <Text className="font-yde-street-light text-body-xs text-brown-1000">{message.sender}</Text>
      <View
        className={`rounded-tl-chat rounded-tr-chat px-5 py-2 ${
          message.mine
            ? `rounded-bl-chat ${ROOM_ME_BG[room]}`
            : 'rounded-br-chat bg-default-card'
        }`}
      >
        <Text className="font-yde-street-light text-body-s text-brown-1000">
          {message.message}
        </Text>
      </View>
    </View>
  );
}

export default function InfernoChatList({ messages, room }: InfernoChatListProps) {
  return (
    <View className="w-[360px] gap-4">
      {messages.map((message) => (
        <ChatMessageRow key={`${message.sender}-${message.message}`} message={message} room={room} />
      ))}
    </View>
  );
}
