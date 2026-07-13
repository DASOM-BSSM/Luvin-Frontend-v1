import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import type { CastMember } from '@/src/features/inferno/data/castMembers';
import type { BreadTypeId } from '@/src/shared/types/bread';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import ChoiceButton from '@/src/shared/ui/ChoiceButton';
import PrimaryButton from '@/src/shared/ui/PrimaryButton';

interface EpisodeVoteScreenProps {
  castMembers: CastMember[];
  ballotLabel: string;
  ballotTitle: string;
  quoteText: string;
  resultTitle: string;
  resultSubtitle: string;
  endNoticeLines: string[];
  endActionLabel?: string;
  onVote?: (type: BreadTypeId) => void;
  onPressEndAction: () => void;
}

export default function EpisodeVoteScreen({
  castMembers,
  ballotLabel,
  ballotTitle,
  quoteText,
  resultTitle,
  resultSubtitle,
  endNoticeLines,
  endActionLabel = '에피소드 끝내기',
  onVote,
  onPressEndAction,
}: EpisodeVoteScreenProps) {
  const [selectedType, setSelectedType] = useState<BreadTypeId>(castMembers[0].type);
  const [voted, setVoted] = useState(false);
  const selectedMember = castMembers.find((member) => member.type === selectedType) ?? castMembers[0];

  const handlePressVote = () => {
    setVoted(true);
    onVote?.(selectedType);
  };

  if (!voted) {
    return (
      <View className="flex-1 items-center justify-center px-8">
        <View className="w-full max-w-3xl gap-6">
          <View className="gap-1">
            <Text className="font-yde-street-light text-body-s text-brown-1000">{ballotLabel}</Text>
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">{ballotTitle}</Text>
          </View>

          <View className="flex-row items-center gap-12">
            <View className="w-2/5 flex-row flex-wrap gap-4">
              {castMembers.map((member) => (
                <Pressable key={member.type} onPress={() => setSelectedType(member.type)}>
                  <BreadCharacter
                    type={member.type}
                    variant="dough"
                    className={`h-14 w-20 ${selectedType === member.type ? '' : 'opacity-50'}`}
                  />
                </Pressable>
              ))}
            </View>

            <View className="w-96 items-center gap-4 rounded-chat bg-neutral-200 px-8 py-6">
              <View className="items-center gap-1">
                <Text className="font-yde-street-light text-body-s text-default-black">
                  “{quoteText}”
                </Text>
                <Text className="font-yde-street-bold text-heading-h3 text-default-black">
                  {selectedMember.adjective}한 {selectedMember.name} 반죽에게
                </Text>
              </View>
              <PrimaryButton label="투표 하기" onPress={handlePressVote} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl gap-6">
        <View className="gap-1">
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">{resultTitle}</Text>
          <Text className="font-yde-street-light text-body-m text-default-black">{resultSubtitle}</Text>
        </View>

        <View className="flex-row items-start gap-12">
          <View className="w-96 items-center gap-4 rounded-chat bg-neutral-200 px-8 py-6">
            <View className="items-center gap-1">
              <Text className="font-yde-street-light text-body-s text-default-black">
                “{quoteText}”
              </Text>
              <Text className="font-yde-street-bold text-heading-h3 text-default-black">
                {selectedMember.adjective}한 {selectedMember.name} 반죽에게
              </Text>
            </View>
            <PrimaryButton label="투표 완료" />
          </View>

          <View className="gap-4">
            <View className="gap-1">
              {endNoticeLines.map((line) => (
                <Text key={line} className="font-yde-street-light text-body-s text-brown-1000">
                  {line}
                </Text>
              ))}
            </View>
            <ChoiceButton label={endActionLabel} selected onPress={onPressEndAction} />
          </View>
        </View>
      </View>
    </View>
  );
}
