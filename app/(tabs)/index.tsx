import { router, useLocalSearchParams, type Href } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import EpisodeThumbnail from '@/src/features/inferno/components/EpisodeThumbnail';
import { getEpisodeConfig } from '@/src/features/inferno/data/episodes';
import { useInfernoStore } from '@/src/features/inferno/store/inferno.store';
import DailyBalanceGameCard from '@/src/shared/components/DailyBalanceGameCard';
import MyProfileCard from '@/src/shared/components/MyProfileCard';
import AppScreen from '@/src/shared/ui/AppScreen';
import BottomNav from '@/src/shared/ui/BottomNav';
import PageHeader from '@/src/shared/ui/PageHeader';
import useBottomNavRoute from '@/src/shared/hooks/useBottomNavRoute';

const SURVEY_ROUTE = '/survey' as Href;

export default function HomeScreen() {
  const { survey } = useLocalSearchParams<{ survey?: string }>();
  const hasSurveyResult = survey === 'done';
  const handleTabChange = useBottomNavRoute();
  const currentEpisode = useInfernoStore((state) => state.currentEpisode);
  const currentEpisodeConfig = getEpisodeConfig(currentEpisode);

  const handleSurveyPress = () => {
    router.push(SURVEY_ROUTE);
  };

  const handlePressEpisodeThumbnail = () => {
    router.push(`/inferno-episode/${currentEpisode}`);
  };

  return (
    <AppScreen footer={<BottomNav activeTab="home" onTabChange={handleTabChange} />}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-12 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <PageHeader />

        <View className="w-full self-center gap-1.5 px-1">
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">
            타이밍을 놓치기 전에,
          </Text>
          <Text className="font-yde-street-light text-body-s text-default-black">
            온도가 맞는 반죽을 만나 가장 따뜻한 사랑을 만들어요
          </Text>
        </View>

        <View className="w-full self-center gap-8">
          <MyProfileCard
            status={hasSurveyResult ? 'default' : 'noquestion'}
            breadType="donut"
            temperature={0}
            onPressSurvey={handleSurveyPress}
          />

          <View className="gap-2">
            <Text className="font-yde-street-light text-body-xs text-default-black">
              오늘의 밸런스 게임 - 318명 참여
            </Text>
            <DailyBalanceGameCard
              question="Q. 오직 사랑만으로 결혼할 수 있다?!"
              optionALabel="가능하다"
              optionBLabel="불가능하다"
            />
          </View>

          <View className="gap-2">
            <Text className="font-yde-street-light text-body-xs text-default-black">
              이번주 러빈지옥 에피소드
            </Text>
            <EpisodeThumbnail
              episodeNumber={currentEpisodeConfig.number}
              title={currentEpisodeConfig.thumbnailTitle}
              onPress={handlePressEpisodeThumbnail}
            />
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
}
