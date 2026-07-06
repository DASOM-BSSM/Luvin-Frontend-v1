import { Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import Episode2ConversationActions from '@/src/features/inferno/components/Episode2ConversationActions';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import type { BreadTypeId } from '@/src/shared/types/bread';

type Episode2ConversationVariant = 'trolleyMatched' | 'trolleyAll' | 'oven';

interface Episode2ConversationScreenProps {
  variant: Episode2ConversationVariant;
  onPressBackToSituation?: () => void;
  onPressNext: () => void;
}

interface ChatMessage {
  sender: string;
  message: string;
  mine?: boolean;
}

const CHAT_MESSAGES: Record<Episode2ConversationVariant, ChatMessage[]> = {
  trolleyMatched: [
    { sender: '따뜻한 바게트 반죽', message: '안녕하세요 저는 따뜻한 바게트 반죽이에용' },
    { sender: '쫀쫀한 소금빵 반죽', message: '안녕하세요 저는 쫀쫀한 소금빵 반죽이에용', mine: true },
    { sender: '차가운 프레첼 반죽', message: '프레첼 좋아하세요?' },
  ],
  trolleyAll: [
    { sender: '따뜻한 바게트 반죽', message: '안녕하세요 저는 따뜻한 바게트 반죽이에용' },
    { sender: '쫀쫀한 소금빵 반죽', message: '안녕하세요 저는 쫀쫀한 소금빵 반죽이에용', mine: true },
    { sender: '차가운 프레첼 반죽', message: '프레첼 좋아하세요?' },
  ],
  oven: [
    { sender: '도도한 도넛 반죽', message: '안녕하세요 저는 도도한 도넛 반죽이에용' },
    { sender: '유쾌한 마들렌 반죽', message: '안녕하세요 저는 유쾌한 마들렌 반죽이에용', mine: true },
    { sender: '도도한 도넛 반죽', message: '왜 저를 투표하셨어요??' },
  ],
};

const BREADS_BY_VARIANT: Record<Episode2ConversationVariant, BreadTypeId[]> = {
  trolleyMatched: ['cream', 'pretzel', 'redbean', 'baguette'],
  trolleyAll: ['cream', 'pretzel', 'donut', 'redbean', 'baguette', 'madeleine'],
  oven: ['madeleine', 'donut'],
};

function HeartIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24">
      <Path
        d="M12 21.4 10.55 20.08C5.4 15.42 2 12.34 2 8.55C2 5.47 4.42 3.05 7.5 3.05C9.24 3.05 10.91 3.86 12 5.14C13.09 3.86 14.76 3.05 16.5 3.05C19.58 3.05 22 5.47 22 8.55C22 12.34 18.6 15.42 13.45 20.09L12 21.4Z"
        fill="#FF0030"
      />
    </Svg>
  );
}

function BreadGroup({ variant }: { variant: Episode2ConversationVariant }) {
  const breads = BREADS_BY_VARIANT[variant];

  if (variant === 'oven') {
    return (
      <View className="h-28 flex-row items-center justify-center gap-7">
        <BreadCharacter type="madeleine" variant="dough" className="h-14 w-20" />
        <HeartIcon />
        <BreadCharacter type="donut" variant="dough" className="h-14 w-20" />
      </View>
    );
  }

  return (
    <View className="w-64 gap-6">
      <View className="flex-row justify-center gap-8">
        {breads.slice(0, 3).map((bread) => (
          <BreadCharacter key={bread} type={bread} variant="dough" className="h-14 w-20" />
        ))}
      </View>
      <View className="flex-row justify-center gap-8">
        {breads.slice(3).map((bread) => (
          <BreadCharacter key={bread} type={bread} variant="dough" className="h-14 w-20" />
        ))}
      </View>
    </View>
  );
}

function ConversationHeader({ variant }: { variant: Episode2ConversationVariant }) {
  const title = variant === 'oven' ? '천국도 이야기에요' : '지옥도 이야기에요';
  const description =
    variant === 'oven'
      ? '매칭된 커플 반죽들은 천국도에서 따로 대화해요'
      : variant === 'trolleyAll'
        ? '이제 단체로 대화할 수 있는 시간이 주어져요'
        : '매칭되지 않은 반죽들끼리 지옥도에서 대화해요';

  return (
    <View className="gap-2">
      <Text className="font-yde-street-bold text-heading-h2 text-default-black">{title}</Text>
      <Text className="font-yde-street-light text-body-s text-brown-1000">{description}</Text>
    </View>
  );
}

function ChatMessageRow({ chat }: { chat: ChatMessage }) {
  return (
    <View className={`gap-1 ${chat.mine ? 'items-end' : 'items-start'}`}>
      <Text className="font-yde-street-light text-body-xs text-brown-1000">{chat.sender}</Text>
      <View
        className={`rounded-tl-chat rounded-tr-chat px-5 py-2 ${
          chat.mine
            ? 'rounded-bl-chat bg-yellow-400'
            : 'rounded-br-chat bg-default-card'
        }`}
      >
        <Text className="font-yde-street-light text-body-s text-brown-1000">{chat.message}</Text>
      </View>
    </View>
  );
}

function ChatList({ variant }: { variant: Episode2ConversationVariant }) {
  return (
    <View className="w-[360px] gap-4">
      {CHAT_MESSAGES[variant].map((chat) => (
        <ChatMessageRow key={`${chat.sender}-${chat.message}`} chat={chat} />
      ))}
    </View>
  );
}

export default function Episode2ConversationScreen({
  variant,
  onPressBackToSituation,
  onPressNext,
}: Episode2ConversationScreenProps) {
  return (
    <View className="flex-1 justify-center px-11">
      <View className="w-full flex-row items-center justify-between">
        <View className="w-[320px] gap-9">
          <ConversationHeader variant={variant} />
          <BreadGroup variant={variant} />
        </View>
        <ChatList variant={variant} />
      </View>
      <Episode2ConversationActions
        onPressBackToSituation={onPressBackToSituation}
        onPressNext={onPressNext}
      />
    </View>
  );
}
