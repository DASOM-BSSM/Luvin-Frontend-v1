import { useState } from 'react';
import { Text, View } from 'react-native';

import ConversationChoiceCards from '@/src/features/inferno/components/ConversationChoiceCards';
import NextStepLink from '@/src/features/inferno/components/NextStepLink';
import type { CastMember } from '@/src/features/inferno/data/castMembers';
import type { BreadTypeId } from '@/src/shared/types/bread';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';

interface EpisodeMiniGameResultScreenProps {
  isWinner: boolean;
  winner: CastMember;
  choices: CastMember[];
  onPressNext: () => void;
}

function WinnerCard({ winner }: { winner: CastMember }) {
  return (
    <View className="flex-1 justify-center gap-3 rounded-chat bg-neutral-200 px-6 py-5">
      <Text className="font-yde-street-light text-body-xs text-brown-1000">
        @ 1위 반죽이에요!! 축하해주세요
      </Text>
      <View className="flex-row items-center gap-4">
        <BreadCharacter type={winner.type} variant="dough" className="h-20 w-28" />
        <View className="flex-1 gap-0.5">
          <Text className="font-yde-street-bold text-heading-h3 text-default-black">
            {winner.adjective} {winner.name} 반죽
          </Text>
          <Text className="font-yde-street-light text-body-xs text-default-black">{winner.quote}</Text>
        </View>
      </View>
    </View>
  );
}

export default function EpisodeMiniGameResultScreen({
  isWinner,
  winner,
  choices,
  onPressNext,
}: EpisodeMiniGameResultScreenProps) {
  const [selectedType, setSelectedType] = useState<BreadTypeId | undefined>(undefined);

  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl gap-6">
        <View className="gap-1">
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">미니게임 결과에요</Text>
          <Text className="font-yde-street-light text-body-s text-brown-1000">
            1위를 한 반죽만 천국도에 갈 상대를 고를 수 있어요
          </Text>
        </View>

        <View className="flex-row items-stretch justify-between gap-12">
          <WinnerCard winner={winner} />
          {isWinner ? (
            <ConversationChoiceCards
              choices={choices.map((choice) => ({ type: choice.type, label: `${choice.name} 반죽과의 대화` }))}
              selectedType={selectedType}
              onSelectChoice={setSelectedType}
            />
          ) : (
            <View className="w-64 justify-center gap-2">
              <Text className="font-yde-street-light text-body-m text-brown-1000">. . .</Text>
              <Text className="font-yde-street-light text-body-s text-brown-1000">
                1위인 반죽이 같이 갈 상대를 고르는 중이에요
              </Text>
              <Text className="font-yde-street-light text-body-s text-brown-1000">
                매칭되면 알림으로 알려드릴게요!
              </Text>
            </View>
          )}
        </View>
      </View>
      <NextStepLink onPress={onPressNext} />
    </View>
  );
}
