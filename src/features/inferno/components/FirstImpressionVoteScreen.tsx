import EpisodeVoteScreen from '@/src/features/inferno/components/EpisodeVoteScreen';
import type { CastMember } from '@/src/features/inferno/data/castMembers';
import type { EpisodeConfig } from '@/src/features/inferno/types';
import type { BreadTypeId } from '@/src/shared/types/bread';

interface FirstImpressionVoteScreenProps {
  episode: EpisodeConfig;
  castMembers: CastMember[];
  onVote: (type: BreadTypeId) => void;
  onEndEpisode: () => void;
}

export default function FirstImpressionVoteScreen({
  episode,
  castMembers,
  onVote,
  onEndEpisode,
}: FirstImpressionVoteScreenProps) {
  return (
    <EpisodeVoteScreen
      castMembers={castMembers}
      ballotLabel="-첫인상 투표 용지-"
      ballotTitle="첫인상이 맘에 드는 반죽 고르기"
      quoteText="당신과 천국도에서 대화하고 싶어요"
      resultTitle="첫인상 투표를 진행해요"
      resultSubtitle="첫인상이 가장 마음에 들었던 반죽에게 투표하세요"
      endNoticeLines={episode.endNoticeLines}
      onVote={onVote}
      onPressEndAction={onEndEpisode}
    />
  );
}
