import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import EpisodeThumbnail from '@/src/features/inferno/components/EpisodeThumbnail';
import InfernoHostIntro from '@/src/features/inferno/components/InfernoHostIntro';
import InfernoStartCard from '@/src/features/inferno/components/InfernoStartCard';
import { getEpisodeConfig } from '@/src/features/inferno/data/episodes';
import { useInfernoStore } from '@/src/features/inferno/store/inferno.store';
import AppScreen from '@/src/shared/ui/AppScreen';
import BottomNav from '@/src/shared/ui/BottomNav';
import PageHeader from '@/src/shared/ui/PageHeader';
import useBottomNavRoute from '@/src/shared/hooks/useBottomNavRoute';

type InfernoStatus = 'idle' | 'waiting' | 'active';

export default function InfernoScreen() {
  const [status, setStatus] = useState<InfernoStatus>('idle');
  const handleTabChange = useBottomNavRoute();
  const currentEpisode = useInfernoStore((state) => state.currentEpisode);
  const currentEpisodeConfig = getEpisodeConfig(currentEpisode);

  const handleJoinPress = () => {
    setStatus('waiting');
  };

  const handleEpisodePress = () => {
    setStatus('active');
  };

  const handlePressEpisodeThumbnail = () => {
    router.push(`/inferno-episode/${currentEpisode}`);
  };

  return (
    <AppScreen footer={<BottomNav activeTab="oven" onTabChange={handleTabChange} />}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-9 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <PageHeader />

        <View className="w-full self-center gap-0.5 px-1">
          <Text className="font-yde-street-light text-body-s text-default-black">
            Luvin&apos;s inferno
          </Text>
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">
            러빈지옥
          </Text>
        </View>

        <View className="w-full self-center gap-8">
          <InfernoHostIntro message={'"안녕하세요 전 러빈지옥 패널\n@@이에요!"'} />

          {status === 'idle' && (
            <View className="gap-2">
              <Text className="font-yde-street-light text-body-xs text-default-black">
                러빈지옥 참가하기
              </Text>
              <InfernoStartCard status="idle" onPressJoin={handleJoinPress} />
            </View>
          )}

          {status === 'waiting' && (
            <View className="gap-2">
              <Text className="font-yde-street-light text-body-xs text-default-black">
                러빈지옥 대기중
              </Text>
              <InfernoStartCard status="waiting" matchedCount={3} totalCount={6} />
            </View>
          )}

          {status === 'active' && (
            <View className="gap-2">
              <Text className="font-yde-street-light text-body-xs text-default-black">
                러빈지옥 에피소드
              </Text>
              <EpisodeThumbnail
                episodeNumber={currentEpisodeConfig.number}
                title={currentEpisodeConfig.thumbnailTitle}
                onPress={handlePressEpisodeThumbnail}
              />
            </View>
          )}

          {status !== 'active' && (
            <Text
              className="self-center font-yde-street-light text-body-xs text-text-muted"
              onPress={handleEpisodePress}
            >
              에피소드 화면 미리보기
            </Text>
          )}
        </View>
      </ScrollView>
    </AppScreen>
  );
}
