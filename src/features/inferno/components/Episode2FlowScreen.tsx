import { useState } from 'react';

import Episode2ConversationScreen from '@/src/features/inferno/components/Episode2ConversationScreen';
import Episode2MatchingScreen from '@/src/features/inferno/components/Episode2MatchingScreen';
import Episode2SituationScreen from '@/src/features/inferno/components/Episode2SituationScreen';
import EpisodeHostExplainScreen from '@/src/features/inferno/components/EpisodeHostExplainScreen';
import EpisodeStartScreen from '@/src/features/inferno/components/EpisodeStartScreen';
import {
  EPISODE2_DUMMY_VOTES,
  getEpisode2Matches,
} from '@/src/features/inferno/data/episode2Matching';
import type { EpisodeConfig } from '@/src/features/inferno/types';

type Ep2Step = 'start' | 'hostExplain' | 'matching' | 'situation' | 'trolleyMatched' | 'trolleyAll' | 'oven';

interface Episode2FlowScreenProps {
  episode: EpisodeConfig;
  onEndEpisode: () => void;
  onPressBack: () => void;
}

const EPISODE2_MATCHES = getEpisode2Matches(EPISODE2_DUMMY_VOTES);

export default function Episode2FlowScreen({
  episode,
  onEndEpisode,
  onPressBack,
}: Episode2FlowScreenProps) {
  const [step, setStep] = useState<Ep2Step>('start');
  const hasMatch = EPISODE2_MATCHES.length > 0;

  const handleStartPress = () => {
    setStep('hostExplain');
  };

  const handleHostExplainNext = () => {
    setStep('matching');
  };

  const handleMatchingNext = () => {
    setStep(hasMatch ? 'situation' : 'trolleyAll');
  };

  const handleTrolleyPress = () => {
    setStep('trolleyMatched');
  };

  const handleOvenPress = () => {
    setStep('oven');
  };

  const handleBackToSituationPress = () => {
    setStep('situation');
  };

  if (step === 'start') {
    return (
      <EpisodeStartScreen
        episode={episode}
        onPressBack={onPressBack}
        onPressStart={handleStartPress}
      />
    );
  }

  if (step === 'hostExplain') {
    return (
      <EpisodeHostExplainScreen
        episode={episode}
        actionLabel="다음"
        onPressAction={handleHostExplainNext}
      />
    );
  }

  if (step === 'matching') {
    return (
      <Episode2MatchingScreen
        matches={EPISODE2_MATCHES}
        votes={EPISODE2_DUMMY_VOTES}
        onPressNext={handleMatchingNext}
      />
    );
  }

  if (step === 'situation') {
    return <Episode2SituationScreen onPressTrolley={handleTrolleyPress} onPressOven={handleOvenPress} />;
  }

  if (step === 'trolleyMatched') {
    return (
      <Episode2ConversationScreen
        variant="trolleyMatched"
        onPressBackToSituation={handleBackToSituationPress}
        onPressNext={onEndEpisode}
      />
    );
  }

  if (step === 'trolleyAll') {
    return <Episode2ConversationScreen variant="trolleyAll" onPressNext={onEndEpisode} />;
  }

  return (
    <Episode2ConversationScreen
      variant="oven"
      onPressBackToSituation={handleBackToSituationPress}
      onPressNext={onEndEpisode}
    />
  );
}
