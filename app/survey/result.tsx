import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import BreadTypeResultCard from '@/src/features/result/components/BreadTypeResultCard';
import PersonalityValuesDropdown from '@/src/features/result/components/PersonalityValuesDropdown';
import { BREAD_TYPE_PROFILES } from '@/src/features/result/data/bread-type-profiles';
import { rankBreadTypes } from '@/src/features/result/utils/rank-bread-types';
import { useSurveyStore } from '@/src/features/survey/store/survey.store';
import AppScreen from '@/src/shared/ui/AppScreen';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import PrimaryButton from '@/src/shared/ui/PrimaryButton';

export default function SurveyResultScreen() {
  const personality = useSurveyStore((state) => state.personality);
  const resetSurvey = useSurveyStore((state) => state.resetSurvey);
  const rankedBreadTypes = rankBreadTypes(personality, BREAD_TYPE_PROFILES);
  const topResult = rankedBreadTypes[0];
  const runnerUps = rankedBreadTypes.slice(1, 3);

  const handleRestartPress = () => {
    resetSurvey();
    router.replace('/survey');
  };

  const handleExitPress = () => {
    router.replace('/');
  };

  if (!topResult) {
    return (
      <AppScreen>
        <View className="flex-1 justify-center gap-5">
          <View className="items-center gap-3 rounded-xl bg-default-card px-7.5 py-8">
            <Text className="font-yde-street-bold text-heading-h3 text-text-primary">반죽 결과를 준비 중이에요</Text>
            <Text className="text-center font-yde-street-light text-body-s text-text-muted">
              빵 유형별 13개 성격 기준값이 등록되면{`\n`}코사인 유사도로 결과를 계산해 보여드릴게요.
            </Text>
          </View>
          <View className="gap-3">
            <PrimaryButton label="처음부터 다시하기" selected textWeight="bold" onPress={handleRestartPress} />
            <PrimaryButton label="나가기" tone="muted" textWeight="bold" onPress={handleExitPress} />
          </View>
        </View>
      </AppScreen>
    );
  }

  return (
    <AppScreen>
      <ScrollView className="flex-1" contentContainerClassName="gap-8 pb-8" showsVerticalScrollIndicator={false}>
        <View className="gap-1 px-1">
          <Text className="font-yde-street-light text-body-xs text-brown-500">반죽 만들기 결과</Text>
          <Text className="font-yde-street-bold text-heading-h2 text-text-primary">당신과 가장 닮은 반죽</Text>
        </View>
        <View className="items-center gap-3 rounded-xl bg-default-card px-7.5 py-7">
          <BreadCharacter type={topResult.bread.id} className="h-32 w-40" />
          <Text className="font-yde-street-bold text-heading-h2 text-text-primary">{topResult.bread.name}</Text>
          <Text className="font-yde-street-light text-body-s text-brown-500">
            유사도 {Math.round(topResult.similarity * 100)}%
          </Text>
          <Text className="text-center font-yde-street-light text-body-xs text-text-muted">{topResult.bread.description}</Text>
        </View>
        <PersonalityValuesDropdown personality={personality} />
        <View className="gap-3">
          <Text className="font-yde-street-light text-body-xs text-text-primary">다른 가능성</Text>
          {runnerUps.map((result, index) => (
            <BreadTypeResultCard key={result.bread.id} rank={index + 2} result={result} />
          ))}
        </View>
        <View className="gap-3">
          <PrimaryButton label="다시 반죽 만들기" selected textWeight="bold" onPress={handleRestartPress} />
          <PrimaryButton label="나가기" tone="muted" textWeight="bold" onPress={handleExitPress} />
        </View>
      </ScrollView>
    </AppScreen>
  );
}
