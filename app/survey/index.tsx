import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSurveyStore } from '@/src/features/survey/store/survey.store';
import useBottomNavRoute from '@/src/shared/hooks/useBottomNavRoute';
import AppScreen from '@/src/shared/ui/AppScreen';
import BottomNav from '@/src/shared/ui/BottomNav';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import PrimaryButton from '@/src/shared/ui/PrimaryButton';

export default function SurveyIndexScreen() {
  const handleTabChange = useBottomNavRoute();
  const resetSurvey = useSurveyStore((state) => state.resetSurvey);

  const handleStartSurveyPress = () => {
    resetSurvey();
    router.push('/survey/questions');
  };

  return (
    <AppScreen footer={<BottomNav activeTab="avatar" onTabChange={handleTabChange} />}>
      <View className="flex-1 justify-center gap-8">
        <View className="items-center gap-5">
          <BreadCharacter type="cream" variant="dough" className="h-36 w-44" />
          <View className="items-center gap-2 px-4">
            <Text className="font-yde-street-light text-body-xs text-brown-500">나만의 반죽 만들기</Text>
            <Text className="text-center font-yde-street-bold text-heading-h2 text-text-primary">
              사랑할 때의 나를 알아볼 시간이에요
            </Text>
            <Text className="text-center font-yde-street-light text-body-s text-text-muted">
              20개의 질문에 답하면 13개 성격 변수를 분석해{`\n`}나와 가장 닮은 빵 유형을 찾아드려요.
            </Text>
          </View>
        </View>
        <View className="gap-3 rounded-xl bg-default-card px-6 py-5">
          <View className="flex-row items-center justify-between">
            <Text className="font-yde-street-light text-body-s text-text-primary">질문 수</Text>
            <Text className="font-yde-street-bold text-body-s text-brown-500">20개</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="font-yde-street-light text-body-s text-text-primary">선택지</Text>
            <Text className="font-yde-street-bold text-body-s text-brown-500">각 3개</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="font-yde-street-light text-body-s text-text-primary">분석 변수</Text>
            <Text className="font-yde-street-bold text-body-s text-brown-500">13가지</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="font-yde-street-light text-body-s text-text-primary">예상 소요시간</Text>
            <Text className="font-yde-street-bold text-body-s text-brown-500">약 5~15분</Text>
          </View>
        </View>
        <PrimaryButton label="설문 시작하기" selected textWeight="bold" onPress={handleStartSurveyPress} />
      </View>
    </AppScreen>
  );
}
