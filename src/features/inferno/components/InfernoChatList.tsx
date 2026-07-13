import { useEffect, useMemo, useState } from 'react';
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

const ROOM_ME_TEXT: Record<ChatRoom, string> = {
  oven: 'text-default-bg',
  trolley: 'text-brown-1000',
};

const LETTER_DELAY_MS = 35;
const MESSAGE_DELAY_MS = 280;

function ChatMessageRow({
  message,
  room,
  visibleText,
}: {
  message: InfernoChatMessage;
  room: ChatRoom;
  visibleText: string;
}) {
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
        <Text
          className={`font-yde-street-light text-body-s ${
            message.mine ? ROOM_ME_TEXT[room] : 'text-brown-1000'
          }`}
        >
          {visibleText || ' '}
        </Text>
      </View>
    </View>
  );
}

export default function InfernoChatList({ messages, room }: InfernoChatListProps) {
  const messageCharacters = useMemo(
    () => messages.map((message) => Array.from(message.message)),
    [messages],
  );
  const [visibleMessages, setVisibleMessages] = useState(() => messages.map(() => ''));

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let isMounted = true;

    const handleTypeNextCharacter = (messageIndex: number, characterIndex: number) => {
      const currentCharacters = messageCharacters[messageIndex];

      if (!isMounted || !currentCharacters) return;

      if (characterIndex < currentCharacters.length) {
        setVisibleMessages((currentMessages) =>
          currentMessages.map((text, currentIndex) =>
            currentIndex === messageIndex
              ? currentCharacters.slice(0, characterIndex + 1).join('')
              : text,
          ),
        );

        timeoutId = setTimeout(
          () => handleTypeNextCharacter(messageIndex, characterIndex + 1),
          LETTER_DELAY_MS,
        );
        return;
      }

      if (messageIndex < messageCharacters.length - 1) {
        timeoutId = setTimeout(
          () => handleTypeNextCharacter(messageIndex + 1, 0),
          MESSAGE_DELAY_MS,
        );
      }
    };

    setVisibleMessages(messages.map(() => ''));
    handleTypeNextCharacter(0, 0);

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [messageCharacters, messages]);

  return (
    <View className="w-[360px] gap-4">
      {messages.map((message, index) => (
        <ChatMessageRow
          key={`${message.sender}-${message.message}`}
          message={message}
          room={room}
          visibleText={visibleMessages[index] ?? ''}
        />
      ))}
    </View>
  );
}
