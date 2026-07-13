import { Pressable, Text, View } from 'react-native';

import type { BreadTypeId } from '@/src/shared/types/bread';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';

export interface ConversationChoice {
  label: string;
  type: BreadTypeId;
}

interface ConversationChoiceCardsProps {
  choices: ConversationChoice[];
  selectedType?: BreadTypeId;
  onSelectChoice: (type: BreadTypeId) => void;
}

export default function ConversationChoiceCards({
  choices,
  selectedType,
  onSelectChoice,
}: ConversationChoiceCardsProps) {
  return (
    <View className="w-64 flex-row flex-wrap justify-center gap-4">
      {choices.map((choice) => (
        <Pressable
          key={choice.type}
          className={`w-28 items-center gap-1 rounded-xl border bg-default-card px-2 py-3 ${
            selectedType === choice.type ? 'border-yellow-400' : 'border-neutral-300'
          }`}
          onPress={() => onSelectChoice(choice.type)}
        >
          <BreadCharacter type={choice.type} variant="dough" className="h-10 w-14" />
          <Text className="font-yde-street-light text-body-xxs text-brown-1000 text-center">
            {choice.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
