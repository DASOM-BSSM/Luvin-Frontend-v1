import { useState } from 'react';
import { Text, View } from 'react-native';

import ChoiceButton from '@/src/shared/ui/ChoiceButton';

interface DailyBalanceGameCardProps {
  question: string;
  optionALabel: string;
  optionBLabel: string;
  className?: string;
}

export default function DailyBalanceGameCard({
  question,
  optionALabel,
  optionBLabel,
  className = 'w-full',
}: DailyBalanceGameCardProps) {
  const [selected, setSelected] = useState<'A' | 'B' | null>(null);

  const handleOptionAPress = () => {
    setSelected('A');
  };

  const handleOptionBPress = () => {
    setSelected('B');
  };

  return (
    <View className={`${className} items-center gap-3 rounded-xl px-6 py-4`}>
      <Text className="font-yde-street-bold text-heading-h4 text-brown-1000 text-center">
        {question}
      </Text>
      <View className="flex-row items-start gap-4">
        <ChoiceButton label={optionALabel} selected={selected === 'A'} onPress={handleOptionAPress} />
        <ChoiceButton label={optionBLabel} selected={selected === 'B'} onPress={handleOptionBPress} />
      </View>
    </View>
  );
}
