import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import type { CastMember } from '@/src/features/inferno/data/castMembers';
import type { BreadTypeId } from '@/src/shared/types/bread';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';

interface CastIntroScreenProps {
  castMembers: CastMember[];
}

export default function CastIntroScreen({ castMembers }: CastIntroScreenProps) {
  const [selectedType, setSelectedType] = useState<BreadTypeId>(castMembers[0].type);
  const selectedMember = castMembers.find((member) => member.type === selectedType) ?? castMembers[0];

  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl gap-6">
        <View className="gap-1">
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">
            러빈지옥 출연자를 소개할게요
          </Text>
          <Text className="font-yde-street-light text-body-m text-default-black">
            반죽을 눌러서 각 출연자들의 소개를 들을 수 있어요
          </Text>
        </View>

        <View className="flex-row items-center gap-8">
          <View className="w-2/5 flex-row flex-wrap gap-3">
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

          <View className="min-h-44 flex-1 gap-3 rounded-chat bg-neutral-200 p-5">
            <View className="flex-row items-center gap-4">
              <BreadCharacter type={selectedMember.type} variant="dough" className="h-14 w-20" />
              <View className="flex-1 gap-0.5">
                <Text className="font-yde-street-bold text-heading-h4 text-default-black">
                  {selectedMember.adjective} {selectedMember.name} 반죽
                </Text>
                <Text className="font-yde-street-light text-body-xs text-default-black">
                  {selectedMember.quote}
                </Text>
              </View>
            </View>
            <View>
              {selectedMember.hashtags.map((hashtag) => (
                <Text key={hashtag} className="font-yde-street-light text-body-xs text-brown-1000">
                  # {hashtag}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
