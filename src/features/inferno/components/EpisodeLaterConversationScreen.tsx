import InfernoConversationScreen from '@/src/features/inferno/components/InfernoConversationScreen';
import {
  CATFISH_CONVERSATION_CHOICES,
  CATFISH_CONVERSATION_MESSAGES,
  FINAL_CONVERSATION_MESSAGES,
  GROUP_CONVERSATION_MESSAGES,
  OVEN_CONVERSATION_MESSAGES,
} from '@/src/features/inferno/data/episodeScenes';

type LaterConversationKind = 'catfish' | 'group' | 'oven';

interface EpisodeLaterConversationScreenProps {
  episodeNumber: number;
  kind: LaterConversationKind;
  onPressNext: () => void;
}

export default function EpisodeLaterConversationScreen({
  episodeNumber,
  kind,
  onPressNext,
}: EpisodeLaterConversationScreenProps) {
  if (kind === 'catfish') {
    return (
      <InfernoConversationScreen
        choices={CATFISH_CONVERSATION_CHOICES}
        description="이성 출연자 3명과의 대화를 골라서 볼 수 있어요"
        messages={CATFISH_CONVERSATION_MESSAGES}
        onPressNext={onPressNext}
        room="trolley"
        title="1:1 대화를 진행해요"
      />
    );
  }

  if (kind === 'group') {
    return (
      <InfernoConversationScreen
        breadRows={[['cream', 'pretzel', 'donut'], ['redbean', 'baguette', 'madeleine']]}
        description="모든 출연자들과 대화하며 마음의 방향을 확인해요"
        messages={GROUP_CONVERSATION_MESSAGES}
        onPressNext={onPressNext}
        room="trolley"
        title="모두와 대화를 나눠요"
      />
    );
  }

  return (
    <InfernoConversationScreen
      breadRows={episodeNumber === 7 ? [['madeleine', 'baguette', 'donut']] : undefined}
      description="천국도에서 조금 더 솔직한 대화를 나눠요"
      messages={episodeNumber === 7 ? FINAL_CONVERSATION_MESSAGES : OVEN_CONVERSATION_MESSAGES}
      onPressNext={onPressNext}
      pair={episodeNumber === 7 ? undefined : ['salt', 'donut']}
      room="oven"
      title="천국도 이야기에요"
    />
  );
}
