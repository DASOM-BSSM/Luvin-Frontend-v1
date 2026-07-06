import Episode2AnimatedVoteArrow, {
  type DiagramPoint,
} from '@/src/features/inferno/components/Episode2AnimatedVoteArrow';
import {
  getEpisode2Participant,
  type Episode2Vote,
} from '@/src/features/inferno/data/episode2Matching';
import type { BreadTypeId } from '@/src/shared/types/bread';

interface Episode2VoteArrowLayerProps {
  getPoint: (type: BreadTypeId) => DiagramPoint;
  votes: Episode2Vote[];
}

const FEMALE_ARROW_COLOR = '#FFAF39';
const MALE_ARROW_COLOR = '#B6642A';
const RECIPROCAL_ARROW_OFFSET = 7;
const VOTE_ANIMATION_INTERVAL_MS = 150;

function hasReciprocalVote(vote: Episode2Vote, votes: Episode2Vote[]): boolean {
  return votes.some((item) => item.from === vote.to && item.to === vote.from);
}

function getOffsetPoints(
  vote: Episode2Vote,
  votes: Episode2Vote[],
  getPoint: (type: BreadTypeId) => DiagramPoint,
): { from: DiagramPoint; to: DiagramPoint } {
  const from = getPoint(vote.from);
  const to = getPoint(vote.to);

  if (!hasReciprocalVote(vote, votes)) {
    return { from, to };
  }

  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy);
  const offset = {
    x: (-dy / length) * RECIPROCAL_ARROW_OFFSET,
    y: (dx / length) * RECIPROCAL_ARROW_OFFSET,
  };

  return {
    from: { x: from.x + offset.x, y: from.y + offset.y },
    to: { x: to.x + offset.x, y: to.y + offset.y },
  };
}

function VoteArrow({
  getPoint,
  index,
  vote,
  votes,
}: {
  getPoint: (type: BreadTypeId) => DiagramPoint;
  index: number;
  vote: Episode2Vote;
  votes: Episode2Vote[];
}) {
  const gender = getEpisode2Participant(vote.from).gender;
  const color = gender === 'female' ? FEMALE_ARROW_COLOR : MALE_ARROW_COLOR;
  const { from, to } = getOffsetPoints(vote, votes, getPoint);

  return (
    <Episode2AnimatedVoteArrow
      color={color}
      delayMs={index * VOTE_ANIMATION_INTERVAL_MS}
      from={from}
      to={to}
    />
  );
}

export default function Episode2VoteArrowLayer({
  getPoint,
  votes,
}: Episode2VoteArrowLayerProps) {
  return votes.map((vote, index) => (
    <VoteArrow
      key={`${vote.from}-${vote.to}`}
      getPoint={getPoint}
      index={index}
      vote={vote}
      votes={votes}
    />
  ));
}
