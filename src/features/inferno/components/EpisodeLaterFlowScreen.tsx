import { useState } from 'react';

import Episode2MatchingScreen from '@/src/features/inferno/components/Episode2MatchingScreen';
import Episode2SituationScreen from '@/src/features/inferno/components/Episode2SituationScreen';
import EpisodeCatfishIntroScreen from '@/src/features/inferno/components/EpisodeCatfishIntroScreen';
import EpisodeHostExplainScreen from '@/src/features/inferno/components/EpisodeHostExplainScreen';
import EpisodeLaterConversationScreen from '@/src/features/inferno/components/EpisodeLaterConversationScreen';
import EpisodeMiniGameScreen from '@/src/features/inferno/components/EpisodeMiniGameScreen';
import EpisodeStartScreen from '@/src/features/inferno/components/EpisodeStartScreen';
import EpisodeVoteNoticeScreen from '@/src/features/inferno/components/EpisodeVoteNoticeScreen';
import {
  EPISODE2_DUMMY_VOTES,
  getEpisode2Matches,
} from '@/src/features/inferno/data/episode2Matching';
import type { EpisodeConfig } from '@/src/features/inferno/types';

type LaterStep =
  | 'start'
  | 'hostExplain'
  | 'catfishIntro'
  | 'catfishChat'
  | 'memoryGame'
  | 'partnerVote'
  | 'allConversation'
  | 'dateVote'
  | 'matching'
  | 'situation'
  | 'quizGame'
  | 'ovenChat'
  | 'finalVote';

interface EpisodeLaterFlowScreenProps {
  episode: EpisodeConfig;
  onEndEpisode: () => void;
  onPressBack: () => void;
}

const EPISODE2_MATCHES = getEpisode2Matches(EPISODE2_DUMMY_VOTES);
const EPISODE_STEPS: Record<number, LaterStep[]> = {
  3: ['start', 'hostExplain', 'catfishIntro', 'catfishChat'],
  4: ['start', 'hostExplain', 'memoryGame', 'partnerVote', 'ovenChat'],
  5: ['start', 'hostExplain', 'allConversation', 'dateVote'],
  6: ['start', 'hostExplain', 'matching', 'situation'],
  7: ['start', 'hostExplain', 'allConversation', 'finalVote'],
};

export default function EpisodeLaterFlowScreen({
  episode,
  onEndEpisode,
  onPressBack,
}: EpisodeLaterFlowScreenProps) {
  const steps = EPISODE_STEPS[episode.number] ?? EPISODE_STEPS[5];
  const [step, setStep] = useState<LaterStep>(steps[0]);

  const handleNext = () => {
    const currentIndex = steps.indexOf(step);
    const nextStep = currentIndex >= 0 ? steps[currentIndex + 1] : undefined;

    if (!nextStep) {
      onEndEpisode();
      return;
    }

    setStep(nextStep);
  };

  const handleTrolleyPress = () => {
    setStep('quizGame');
  };

  const handleOvenPress = () => {
    setStep('ovenChat');
  };

  if (step === 'start') {
    return <EpisodeStartScreen episode={episode} onPressBack={onPressBack} onPressStart={handleNext} />;
  }

  if (step === 'hostExplain') {
    return <EpisodeHostExplainScreen episode={episode} actionLabel="다음" onPressAction={handleNext} />;
  }

  if (step === 'catfishIntro') {
    return <EpisodeCatfishIntroScreen onPressNext={handleNext} />;
  }

  if (step === 'catfishChat') {
    return <EpisodeLaterConversationScreen episodeNumber={episode.number} kind="catfish" onPressNext={handleNext} />;
  }

  if (step === 'memoryGame') {
    return <EpisodeMiniGameScreen kind="memory" onComplete={handleNext} />;
  }

  if (step === 'partnerVote' || step === 'dateVote' || step === 'finalVote') {
    return (
      <EpisodeVoteNoticeScreen
        description={step === 'finalVote' ? 'AI 분신이 마지막 선택을 진행해요' : '반죽들의 선택이 진행되고 있어요'}
        onPressNext={handleNext}
        title={step === 'finalVote' ? '최종 투표가 시작돼요' : '같이 가고 싶은 사람 투표가 시작돼요'}
      />
    );
  }

  if (step === 'allConversation') {
    return <EpisodeLaterConversationScreen episodeNumber={episode.number} kind="group" onPressNext={handleNext} />;
  }

  if (step === 'matching') {
    return <Episode2MatchingScreen matches={EPISODE2_MATCHES} votes={EPISODE2_DUMMY_VOTES} onPressNext={handleNext} />;
  }

  if (step === 'situation') {
    return <Episode2SituationScreen onPressTrolley={handleTrolleyPress} onPressOven={handleOvenPress} />;
  }

  if (step === 'quizGame') {
    return <EpisodeMiniGameScreen kind="quiz" onComplete={onEndEpisode} />;
  }

  return <EpisodeLaterConversationScreen episodeNumber={episode.number} kind="oven" onPressNext={handleNext} />;
}
