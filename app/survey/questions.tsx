import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { SURVEY_QUESTIONS } from '@/src/features/survey/constants/questions';
import SurveyOptionButton from '@/src/features/survey/components/SurveyOptionButton';
import { useSurveyStore } from '@/src/features/survey/store/survey.store';
import type { SurveyOption } from '@/src/features/survey/types';
import AppScreen from '@/src/shared/ui/AppScreen';
import BackLink from '@/src/shared/ui/BackLink';
import BottomNav from '@/src/shared/ui/BottomNav';
import useBottomNavRoute from '@/src/shared/hooks/useBottomNavRoute';

export default function SurveyQuestionsScreen() {
  const handleTabChange = useBottomNavRoute();
  const answers = useSurveyStore((state) => state.answers);
  const answerQuestion = useSurveyStore((state) => state.answerQuestion);
  const currentQuestionIndex = useSurveyStore((state) => state.currentQuestionIndex);
  const goToNextQuestion = useSurveyStore((state) => state.goToNextQuestion);
  const goToPreviousQuestion = useSurveyStore((state) => state.goToPreviousQuestion);
  const question = SURVEY_QUESTIONS[currentQuestionIndex];

  const handleBackPress = () => {
    if (currentQuestionIndex === 0) {
      router.back();
      return;
    }

    goToPreviousQuestion();
  };

  const handleOptionPress = (option: SurveyOption) => {
    answerQuestion(question.id, option);

    if (currentQuestionIndex < SURVEY_QUESTIONS.length - 1) {
      goToNextQuestion();
      return;
    }

    router.replace('/survey/result');
  };

  return (
    <AppScreen footer={<BottomNav activeTab="avatar" onTabChange={handleTabChange} />}>
      <View className="flex-1 gap-8 pt-1">
        <View className="w-full flex-row items-center justify-between">
          <BackLink onPress={handleBackPress} />
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
                selected={answers[question.id] === option.id}
                onPress={handleOptionPress}
              />
            ))}
          </View>
        </View>
      </View>
    </AppScreen>
  );
}
