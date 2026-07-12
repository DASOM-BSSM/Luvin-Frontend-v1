import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import type { CastMember } from "@/src/features/inferno/data/castMembers";
import type { EpisodeConfig } from "@/src/features/inferno/types";
import type { BreadTypeId } from "@/src/shared/types/bread";
import BreadCharacter from "@/src/shared/ui/BreadCharacter";
import ChoiceButton from "@/src/shared/ui/ChoiceButton";

interface FirstImpressionVoteScreenProps {
  episode: EpisodeConfig;
  castMembers: CastMember[];
  onVote: (type: BreadTypeId) => void;
  onEndEpisode: () => void;
}

export default function FirstImpressionVoteScreen({
  episode,
  castMembers,
  onVote,
  onEndEpisode,
}: FirstImpressionVoteScreenProps) {
  const [selectedType, setSelectedType] = useState<BreadTypeId>(castMembers[0].type);
  const [voted, setVoted] = useState(false);
  const selectedMember = castMembers.find(member => member.type === selectedType) ?? castMembers[0];

  const handlePressVote = () => {
    setVoted(true);
    onVote(selectedType);
  };

  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl gap-6">
        <View className="gap-1">
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">첫인상 투표를 진행해요</Text>
          <Text className="font-yde-street-light text-body-m text-default-black">
            첫인상이 가장 마음에 들었던 반죽에게 투표하세요
          </Text>
        </View>

        <View className="flex-row items-center gap-8">
          <View className="w-2/5 flex-row flex-wrap gap-3">
            {castMembers.map(member => (
              <Pressable key={member.type} disabled={voted} onPress={() => setSelectedType(member.type)}>
                <BreadCharacter
                  type={member.type}
                  variant="dough"
                  className={`h-14 w-20 ${selectedType === member.type ? "" : "opacity-50"}`}
                />
              </Pressable>
            ))}
          </View>

          <View className="flex-1 items-start gap-4">
            <View className="w-full items-center gap-3 rounded-chat bg-neutral-200 px-10 py-4">
              <View className="items-center gap-1">
                <Text className="font-yde-street-light text-body-xs text-default-black">
                  “당신과 천국도에서 대화하고 싶어요”
                </Text>
                <Text className="font-yde-street-bold text-heading-h4 text-default-black">
                  {selectedMember.adjective} {selectedMember.name} 반죽에게
                </Text>
              </View>
              {!voted && <ChoiceButton label="투표하기" selected className="w-full" onPress={handlePressVote} />}
            </View>

            {voted && (
              <View className="gap-3">
                <View className="gap-1">
                  {episode.endNoticeLines.map(line => (
                    <Text key={line} className="font-yde-street-light text-body-s text-brown-1000">
                      {line}
                    </Text>
                  ))}
                </View>
                <ChoiceButton label="에피소드 끝내기" selected onPress={onEndEpisode} />
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
