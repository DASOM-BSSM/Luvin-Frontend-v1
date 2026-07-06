import InfernoConversationScreen from '@/src/features/inferno/components/InfernoConversationScreen';
import type { InfernoChatMessage } from '@/src/features/inferno/types';
import type { BreadTypeId } from '@/src/shared/types/bread';

type Episode2ConversationVariant = 'trolleyMatched' | 'trolleyAll' | 'oven';

interface Episode2ConversationScreenProps {
  variant: Episode2ConversationVariant;
  onPressBackToSituation?: () => void;
  onPressNext: () => void;
}

interface Episode2ConversationConfig {
  breadRows?: BreadTypeId[][];
  description: string;
  messages: InfernoChatMessage[];
  pair?: [BreadTypeId, BreadTypeId];
  room: 'oven' | 'trolley';
  title: string;
}

const CONVERSATION_CONFIGS: Record<Episode2ConversationVariant, Episode2ConversationConfig> = {
  trolleyMatched: {
    breadRows: [['cream', 'pretzel'], ['redbean', 'baguette']],
    description: '매칭되지 않은 반죽들끼리 지옥도에서 대화해요',
    messages: [
      { sender: '따뜻한 바게트 반죽', message: '안녕하세요 저는 따뜻한 바게트 반죽이에용' },
      { sender: '쫀쫀한 소금빵 반죽', message: '안녕하세요 저는 쫀쫀한 소금빵 반죽이에용', mine: true },
      { sender: '차가운 프레첼 반죽', message: '프레첼 좋아하세요?' },
    ],
    room: 'trolley',
    title: '지옥도 이야기에요',
  },
  trolleyAll: {
    breadRows: [['cream', 'pretzel', 'donut'], ['redbean', 'baguette', 'madeleine']],
    description: '이제 단체로 대화할 수 있는 시간이 주어져요',
    messages: [
      { sender: '따뜻한 바게트 반죽', message: '안녕하세요 저는 따뜻한 바게트 반죽이에용' },
      { sender: '쫀쫀한 소금빵 반죽', message: '안녕하세요 저는 쫀쫀한 소금빵 반죽이에용', mine: true },
      { sender: '차가운 프레첼 반죽', message: '프레첼 좋아하세요?' },
    ],
    room: 'trolley',
    title: '모두 지옥도로 이동했어요',
  },
  oven: {
    description: '매칭된 커플 반죽들은 천국도에서 따로 대화해요',
    messages: [
      { sender: '도도한 도넛 반죽', message: '안녕하세요 저는 도도한 도넛 반죽이에용' },
      { sender: '유쾌한 마들렌 반죽', message: '안녕하세요 저는 유쾌한 마들렌 반죽이에용', mine: true },
      { sender: '도도한 도넛 반죽', message: '왜 저를 투표하셨어요??' },
    ],
    pair: ['madeleine', 'donut'],
    room: 'oven',
    title: '천국도 이야기에요',
  },
};

export default function Episode2ConversationScreen({
  variant,
  onPressBackToSituation,
  onPressNext,
}: Episode2ConversationScreenProps) {
  const config = CONVERSATION_CONFIGS[variant];

  return (
    <InfernoConversationScreen
      breadRows={config.breadRows}
      description={config.description}
      messages={config.messages}
      onPressBackToSituation={onPressBackToSituation}
      onPressNext={onPressNext}
      pair={config.pair}
      room={config.room}
      title={config.title}
    />
  );
}
