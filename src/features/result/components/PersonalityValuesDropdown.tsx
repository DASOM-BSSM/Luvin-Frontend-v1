import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import {
  PERSONALITY_VARIABLE_KEYS,
  PERSONALITY_VARIABLE_LABELS,
  type PersonalityVector,
} from '@/src/features/survey/types';

interface PersonalityValuesDropdownProps {
  personality: PersonalityVector;
}

export default function PersonalityValuesDropdown({ personality }: PersonalityValuesDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTogglePress = () => {
    setIsExpanded((currentValue) => !currentValue);
  };

  return (
    <View className="w-full overflow-hidden rounded-xl bg-default-card">
      <Pressable className="w-full" onPress={handleTogglePress}>
        <View className="flex-row items-center justify-between px-6 py-4">
          <View className="gap-0.5">
            <Text className="font-yde-street-bold text-heading-h4 text-text-primary">나의 성격 유형 변수</Text>
            <Text className="font-yde-street-light text-body-xs text-text-muted">13개 변수의 최종 점수 보기</Text>
          </View>
          <Text className="font-yde-street-light text-body-xs text-brown-500">
            {isExpanded ? '접기' : '펼쳐보기'}
          </Text>
        </View>
      </Pressable>
      {isExpanded && (
        <View className="gap-2 border-t border-brown-200 px-6 py-4">
          {PERSONALITY_VARIABLE_KEYS.map((key) => (
            <View key={key} className="flex-row items-center justify-between">
              <Text className="font-yde-street-light text-body-xs text-text-primary">
                {PERSONALITY_VARIABLE_LABELS[key]}
              </Text>
              <Text className="font-yde-street-bold text-body-xs text-brown-500">{personality[key]}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
