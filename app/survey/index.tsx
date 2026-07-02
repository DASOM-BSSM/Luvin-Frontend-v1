import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { SURVEY_QUESTIONS } from '@/src/features/survey/constants/questions';
import SurveyOptionButton from '@/src/features/survey/components/SurveyOptionButton';
import type { SurveyOption } from '@/src/features/survey/types';
import AppScreen from '@/src/shared/ui/AppScreen';
import BottomNav from '@/src/shared/ui/BottomNav';
import useBottomNavRoute from '@/src/shared/hooks/useBottomNavRoute';

export default function SurveyScreen() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<SurveyOption | null>(null);
  const handleTabChange = useBottomNavRoute();
  const question = SURVEY_QUESTIONS[questionIndex];

  const handleBackPress = () => {
    if (questionIndex === 0) {
      router.back();
      return;
    }

    setQuestionIndex((currentIndex) => currentIndex - 1);
    setSelectedOption(null);
  };

  const handleOptionPress = (option: SurveyOption) => {
    setSelectedOption(option);

    if (questionIndex < SURVEY_QUESTIONS.length - 1) {
      setQuestionIndex((currentIndex) => currentIndex + 1);
      setSelectedOption(null);
      return;
    }

    router.replace('/?survey=done');
  };

  return (
    <AppScreen
      footer={<BottomNav activeTab="avatar" onTabChange={handleTabChange} />}
    >
      <View className="flex-1 gap-8 pt-1">
        <View className="w-full flex-row items-center justify-between">
          <Pressable onPress={handleBackPress}>
            <Text className="font-yde-street-bold text-heading-h3 text-default-black">‹</Text>
          </Pressable>
          <Text className="font-yde-street-light text-body-s text-default-black">
            {String(question.id).padStart(2, '0')} / 20
          </Text>
        </View>

        <View className="w-full flex-1 justify-between pb-[10%]">
          <View className="gap-2 px-1">
            <Text className="font-yde-street-light text-body-xs text-default-black">
              반죽 만들기 {String(question.id).padStart(2, '0')}.
            </Text>
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">
              {question.question}
            </Text>
          </View>

          <View className="gap-3">
            {question.options.map((option) => (
              <SurveyOptionButton
                key={option.id}
                option={option}
                selected={selectedOption?.id === option.id}
                onPress={handleOptionPress}
              />
            ))}
          </View>
        </View>
      </View>
    </AppScreen>
  );
}
