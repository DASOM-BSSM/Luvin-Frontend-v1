import { Pressable, Text, View } from 'react-native';

import type { SurveyOption } from '@/src/features/survey/types';

interface SurveyOptionButtonProps {
  option: SurveyOption;
  selected?: boolean;
  onPress: (option: SurveyOption) => void;
}

export default function SurveyOptionButton({
  option,
  selected = false,
  onPress,
}: SurveyOptionButtonProps) {
  const handlePress = () => {
    onPress(option);
  };

  return (
    <Pressable className="w-full" onPress={handlePress}>
      <View
        className={`w-full aspect-[50/11] justify-center gap-1 rounded-xl px-[9%] ${
          selected ? 'bg-yellow-200' : 'bg-default-card'
        }`}
      >
        <Text className="font-yde-street-light text-body-xs text-default-black">
          {option.id}
        </Text>
        <Text className="font-yde-street-bold text-heading-h4 text-default-black">
          {option.label}
        </Text>
      </View>
    </Pressable>
  );
}
