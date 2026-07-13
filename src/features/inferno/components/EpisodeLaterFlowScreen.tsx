import { useState } from 'react';

import Episode2MatchingScreen from '@/src/features/inferno/components/Episode2MatchingScreen';
import Episode2SituationScreen from '@/src/features/inferno/components/Episode2SituationScreen';
import EpisodeCatfishIntroScreen from '@/src/features/inferno/components/EpisodeCatfishIntroScreen';
import EpisodeHostExplainScreen from '@/src/features/inferno/components/EpisodeHostExplainScreen';
import EpisodeLaterConversationScreen from '@/src/features/inferno/components/EpisodeLaterConversationScreen';
import EpisodeMiniGameResultScreen from '@/src/features/inferno/components/EpisodeMiniGameResultScreen';
import EpisodeMiniGameScreen from '@/src/features/inferno/components/EpisodeMiniGameScreen';
import EpisodeStartScreen from '@/src/features/inferno/components/EpisodeStartScreen';
import EpisodeVoteScreen from '@/src/features/inferno/components/EpisodeVoteScreen';
import { pickRandomCastMembers } from '@/src/features/inferno/data/castMembers';
import {
  EPISODE2_DUMMY_VOTES,
  getEpisode2Matches,
} from '@/src/features/inferno/data/episode2Matching';
import type { EpisodeConfig } from '@/src/features/inferno/types';

const EPISODE_CAST_SIZE = 6;

interface VoteStepCopy {
  ballotLabel: string;
  ballotTitle: string;
  quoteText: string;
  resultTitle: string;
  resultSubtitle: string;
}

const VOTE_STEP_COPY: Record<'dateVote' | 'finalVote', VoteStepCopy> = {
  dateVote: {
    ballotLabel: '-마음 투표 용지-',
    ballotTitle: '함께하고 싶은 반죽 고르기',
    quoteText: '당신과 계속 이야기하고 싶어요',
    resultTitle: '같이 가고 싶은 사람 투표를 진행해요',
    resultSubtitle: '마음이 가는 반죽에게 투표하세요',
  },
  finalVote: {
    ballotLabel: '-최종 투표 용지-',
    ballotTitle: '마지막으로 함께하고 싶은 반죽 고르기',
    quoteText: '당신과 끝까지 함께하고 싶어요',
    resultTitle: '최종 투표가 진행돼요',
    resultSubtitle: '가장 마음이 가는 반죽에게 투표하세요',
  },
};

type LaterStep =
  | 'start'
  | 'hostExplain'
  | 'catfishIntro'
  | 'catfishChat'
  | 'memoryGame'
  | 'gameResult'
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
  4: ['start', 'hostExplain', 'memoryGame', 'gameResult', 'ovenChat'],
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
  const [castMembers] = useState(() => pickRandomCastMembers(EPISODE_CAST_SIZE));
  const [isWinner] = useState(() => Math.random() < 0.5);
  const gameWinner = castMembers[0];
  const gameWinnerChoices = castMembers.slice(1, 4);

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

  if (step === 'gameResult') {
    return (
      <EpisodeMiniGameResultScreen
        isWinner={isWinner}
        winner={gameWinner}
        choices={gameWinnerChoices}
        onPressNext={handleNext}
      />
    );
  }

  if (step === 'dateVote' || step === 'finalVote') {
    const copy = VOTE_STEP_COPY[step];

    return (
      <EpisodeVoteScreen
        castMembers={castMembers}
        ballotLabel={copy.ballotLabel}
        ballotTitle={copy.ballotTitle}
        quoteText={copy.quoteText}
        resultTitle={copy.resultTitle}
        resultSubtitle={copy.resultSubtitle}
        endNoticeLines={episode.endNoticeLines}
        endActionLabel={step === 'finalVote' ? '에피소드 끝내기' : '다음'}
        onPressEndAction={handleNext}
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
