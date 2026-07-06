import { getCastMember } from '@/src/features/inferno/data/castMembers';
import type { BreadTypeId } from '@/src/shared/types/bread';

export type InfernoGender = 'female' | 'male';

export interface Episode2Participant {
  type: BreadTypeId;
  gender: InfernoGender;
}

export interface Episode2Vote {
  from: BreadTypeId;
  to: BreadTypeId;
}

export interface Episode2Match {
  female: BreadTypeId;
  male: BreadTypeId;
}

export const EPISODE2_PARTICIPANTS: Episode2Participant[] = [
  { type: 'pretzel', gender: 'female' },
  { type: 'cream', gender: 'female' },
  { type: 'donut', gender: 'female' },
  { type: 'redbean', gender: 'male' },
  { type: 'madeleine', gender: 'male' },
  { type: 'baguette', gender: 'male' },
];

export const EPISODE2_DUMMY_VOTES: Episode2Vote[] = [
  { from: 'pretzel', to: 'madeleine' },
  { from: 'cream', to: 'baguette' },
  { from: 'donut', to: 'madeleine' },
  { from: 'redbean', to: 'cream' },
  { from: 'madeleine', to: 'donut' },
  { from: 'baguette', to: 'pretzel' },
];

export function getEpisode2ParticipantsByGender(gender: InfernoGender): Episode2Participant[] {
  return EPISODE2_PARTICIPANTS.filter((participant) => participant.gender === gender);
}

export function getEpisode2Participant(type: BreadTypeId): Episode2Participant {
  const participant = EPISODE2_PARTICIPANTS.find((item) => item.type === type);

  if (!participant) {
    throw new Error(`Unknown episode 2 participant: ${type}`);
  }

  return participant;
}

function isDifferentGenderVote(vote: Episode2Vote): boolean {
  const fromParticipant = getEpisode2Participant(vote.from);
  const toParticipant = getEpisode2Participant(vote.to);

  return fromParticipant.gender !== toParticipant.gender;
}

function hasMutualVote(vote: Episode2Vote, votes: Episode2Vote[]): boolean {
  return votes.some((item) => item.from === vote.to && item.to === vote.from);
}

function isSameMatch(match: Episode2Match, vote: Episode2Vote): boolean {
  return (
    (match.female === vote.from && match.male === vote.to) ||
    (match.female === vote.to && match.male === vote.from)
  );
}

function toEpisode2Match(vote: Episode2Vote): Episode2Match {
  const fromParticipant = getEpisode2Participant(vote.from);

  return {
    female: fromParticipant.gender === 'female' ? vote.from : vote.to,
    male: fromParticipant.gender === 'male' ? vote.from : vote.to,
  };
}

export function getEpisode2Matches(votes: Episode2Vote[]): Episode2Match[] {
  return votes.reduce<Episode2Match[]>((matches, vote) => {
    const alreadyMatched = matches.some((match) => isSameMatch(match, vote));

    if (!isDifferentGenderVote(vote) || !hasMutualVote(vote, votes) || alreadyMatched) {
      return matches;
    }

    return [...matches, toEpisode2Match(vote)];
  }, []);
}

export function getEpisode2MatchAnnouncement(matches: Episode2Match[]): string {
  if (matches.length === 0) {
    return '“매칭된 커플이 없네요\n모두 지옥도로 이동할게요”';
  }

  const firstMatch = matches[0];
  const female = getCastMember(firstMatch.female);
  const male = getCastMember(firstMatch.male);

  return `“${female.adjective} ${female.name} 반죽과\n${male.adjective} ${male.name} 반죽이 매칭되었네요!”`;
}
