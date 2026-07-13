import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

import Episode2FlowScreen from '@/src/features/inferno/components/Episode2FlowScreen';
import CastIntroScreen from '@/src/features/inferno/components/CastIntroScreen';
import EpisodeHostExplainScreen from '@/src/features/inferno/components/EpisodeHostExplainScreen';
import EpisodeLaterFlowScreen from '@/src/features/inferno/components/EpisodeLaterFlowScreen';
import EpisodeStartScreen from '@/src/features/inferno/components/EpisodeStartScreen';
import FirstImpressionVoteScreen from '@/src/features/inferno/components/FirstImpressionVoteScreen';
import InfernoSystemIntro from '@/src/features/inferno/components/InfernoSystemIntro';
import NextStepLink from '@/src/features/inferno/components/NextStepLink';
import { pickRandomCastMembers } from '@/src/features/inferno/data/castMembers';
import { EPISODE_CONFIGS, getEpisodeConfig } from '@/src/features/inferno/data/episodes';
import { useInfernoStore } from '@/src/features/inferno/store/inferno.store';
import LandscapeScreen from '@/src/shared/ui/LandscapeScreen';

const EPISODE_CAST_SIZE = 6;

type Ep1Step = 'start' | 'hostExplain' | 'systemIntro' | 'castIntro' | 'vote';
type SimpleStep = 'start' | 'hostExplain';

const createEpisodeStaticParam = (episode: { number: number }) => ({ episode: String(episode.number) });

export function generateStaticParams() {
  return EPISODE_CONFIGS.map(createEpisodeStaticParam);
}

export default function InfernoEpisodeScreen() {
  const { episode } = useLocalSearchParams<{ episode: string }>();
  const episodeNumber = Number(episode);
  const episodeConfig = getEpisodeConfig(episodeNumber);
  const completeEpisode = useInfernoStore((state) => state.completeEpisode);
  const setFirstImpressionVote = useInfernoStore((state) => state.setFirstImpressionVote);

  const [ep1Step, setEp1Step] = useState<Ep1Step>('start');
  const [simpleStep, setSimpleStep] = useState<SimpleStep>('start');
  const [castMembers] = useState(() => pickRandomCastMembers(EPISODE_CAST_SIZE));

  const handleEndEpisode = () => {
    completeEpisode();
    router.back();
  };

  const handleBackToInfernoPress = () => {
    router.replace('/(tabs)/inferno');
  };

  if (episodeNumber === 1) {
    return (
      <LandscapeScreen>
        {ep1Step === 'start' && (
          <EpisodeStartScreen
            episode={episodeConfig}
            onPressBack={handleBackToInfernoPress}
            onPressStart={() => setEp1Step('hostExplain')}
          />
        )}
        {ep1Step === 'hostExplain' && (
          <EpisodeHostExplainScreen
            episode={episodeConfig}
            actionLabel="다음"
            onPressAction={() => setEp1Step('systemIntro')}
          />
        )}
        {ep1Step === 'systemIntro' && (
          <View className="flex-1">
            <InfernoSystemIntro />
            <NextStepLink onPress={() => setEp1Step('castIntro')} />
          </View>
        )}
        {ep1Step === 'castIntro' && (
          <View className="flex-1">
            <CastIntroScreen castMembers={castMembers} />
            <NextStepLink onPress={() => setEp1Step('vote')} />
          </View>
        )}
        {ep1Step === 'vote' && (
          <FirstImpressionVoteScreen
            episode={episodeConfig}
            castMembers={castMembers}
            onVote={setFirstImpressionVote}
            onEndEpisode={handleEndEpisode}
          />
        )}
      </LandscapeScreen>
    );
  }

  if (episodeNumber === 2) {
    return (
      <LandscapeScreen>
        <Episode2FlowScreen
          episode={episodeConfig}
          onEndEpisode={handleEndEpisode}
          onPressBack={handleBackToInfernoPress}
        />
      </LandscapeScreen>
    );
  }

  if (episodeNumber >= 3 && episodeNumber <= 7) {
    return (
      <LandscapeScreen>
        <EpisodeLaterFlowScreen
          episode={episodeConfig}
          onEndEpisode={handleEndEpisode}
          onPressBack={handleBackToInfernoPress}
        />
      </LandscapeScreen>
    );
  }

  return (
    <LandscapeScreen>
      {simpleStep === 'start' && (
        <EpisodeStartScreen
          episode={episodeConfig}
          onPressBack={handleBackToInfernoPress}
          onPressStart={() => setSimpleStep('hostExplain')}
        />
      )}
      {simpleStep === 'hostExplain' && (
        <EpisodeHostExplainScreen episode={episodeConfig} onPressAction={handleEndEpisode} />
      )}
    </LandscapeScreen>
  );
}
