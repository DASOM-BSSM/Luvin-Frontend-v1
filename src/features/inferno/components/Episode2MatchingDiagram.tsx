import { View } from 'react-native';
import Svg from 'react-native-svg';

import type { DiagramPoint } from '@/src/features/inferno/components/Episode2AnimatedVoteArrow';
import Episode2MatchHeart from '@/src/features/inferno/components/Episode2MatchHeart';
import Episode2VoteArrowLayer from '@/src/features/inferno/components/Episode2VoteArrowLayer';
import {
  getEpisode2Participant,
  getEpisode2ParticipantsByGender,
  type Episode2Match,
  type Episode2Vote,
  type InfernoGender,
} from '@/src/features/inferno/data/episode2Matching';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import type { BreadTypeId } from '@/src/shared/types/bread';

interface Episode2MatchingDiagramProps {
  matches: Episode2Match[];
  votes: Episode2Vote[];
}

const HEART_ANIMATION_DELAY_MS = 760;
const ROW_POINTS: Record<InfernoGender, DiagramPoint[]> = {
  female: [
    { x: 38, y: 10 },
    { x: 155, y: 10 },
    { x: 272, y: 10 },
  ],
  male: [
    { x: 38, y: 92 },
    { x: 155, y: 92 },
    { x: 272, y: 92 },
  ],
};

function getPoint(type: BreadTypeId): DiagramPoint {
  const participant = getEpisode2Participant(type);
  const row = getEpisode2ParticipantsByGender(participant.gender);
  const index = row.findIndex((item) => item.type === type);

  return ROW_POINTS[participant.gender][index];
}

function MatchHeart({ match }: { match: Episode2Match }) {
  const femalePoint = getPoint(match.female);
  const malePoint = getPoint(match.male);

  return (
    <Episode2MatchHeart
      delayMs={HEART_ANIMATION_DELAY_MS}
      from={femalePoint}
      to={malePoint}
    />
  );
}

function MatchLines({ votes, matches }: Episode2MatchingDiagramProps) {
  return (
    <Svg width={310} height={104} viewBox="0 0 310 104">
      <Episode2VoteArrowLayer getPoint={getPoint} votes={votes} />
      {matches.map((match) => (
        <MatchHeart key={`${match.female}-${match.male}`} match={match} />
      ))}
    </Svg>
  );
}

export default function Episode2MatchingDiagram({
  votes,
  matches,
}: Episode2MatchingDiagramProps) {
  const femaleParticipants = getEpisode2ParticipantsByGender('female');
  const maleParticipants = getEpisode2ParticipantsByGender('male');

  return (
    <View className="w-[310px] items-center">
      <View className="w-full flex-row items-center justify-between">
        {femaleParticipants.map((participant) => (
          <BreadCharacter
            key={participant.type}
            type={participant.type}
            variant="dough"
            className="h-14 w-20"
          />
        ))}
      </View>
      <MatchLines votes={votes} matches={matches} />
      <View className="w-full flex-row items-center justify-between">
        {maleParticipants.map((participant) => (
          <BreadCharacter
            key={participant.type}
            type={participant.type}
            variant="dough"
            className="h-14 w-20"
          />
        ))}
      </View>
    </View>
  );
}
