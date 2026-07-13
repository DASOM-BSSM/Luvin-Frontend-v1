import { View } from 'react-native';

import Episode2MatchingDiagram from '@/src/features/inferno/components/Episode2MatchingDiagram';
import NextStepLink from '@/src/features/inferno/components/NextStepLink';
import {
  getEpisode2MatchAnnouncement,
  type Episode2Match,
  type Episode2Vote,
} from '@/src/features/inferno/data/episode2Matching';
import AvatarCharacter from '@/src/shared/ui/AvatarCharacter';
import CommentBubble from '@/src/shared/ui/CommentBubble';

interface Episode2MatchingScreenProps {
  matches: Episode2Match[];
  votes: Episode2Vote[];
  onPressNext: () => void;
}

export default function Episode2MatchingScreen({
  matches,
  votes,
  onPressNext,
}: Episode2MatchingScreenProps) {
  const comment = getEpisode2MatchAnnouncement(matches);

  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl flex-row items-center justify-between">
        <Episode2MatchingDiagram votes={votes} matches={matches} />
        <View className="flex-row items-center gap-4">
          <AvatarCharacter className="h-20 w-14" />
          <CommentBubble text={comment} textClassName="text-body-s" className="px-7 py-3" />
        </View>
      </View>
      <NextStepLink onPress={onPressNext} />
    </View>
  );
}
