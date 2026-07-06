import { Text, View } from 'react-native';

import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import ChoiceButton from '@/src/shared/ui/ChoiceButton';
import type { BreadTypeId } from '@/src/shared/types/bread';

interface EpisodeVoteNoticeScreenProps {
  description: string;
  onPressNext: () => void;
  title: string;
  types?: BreadTypeId[];
}

export default function EpisodeVoteNoticeScreen({
  description,
  onPressNext,
  title,
  types = ['cream', 'pretzel', 'donut', 'redbean', 'baguette', 'madeleine'],
}: EpisodeVoteNoticeScreenProps) {
  return (
    <View className="flex-1 items-center justify-center px-11">
      <View className="w-full max-w-3xl flex-row items-center justify-between">
        <View className="gap-4">
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">{title}</Text>
          <Text className="font-yde-street-light text-body-s text-brown-1000">{description}</Text>
          <View className="w-72 flex-row flex-wrap gap-5">
            {types.map((type) => (
              <BreadCharacter key={type} type={type} variant="dough" className="h-12 w-16" />
            ))}
          </View>
        </View>
        <ChoiceButton label="다음" selected onPress={onPressNext} />
      </View>
    </View>
  );
}
