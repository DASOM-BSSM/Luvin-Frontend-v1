import { PERSONALITY_VARIABLE_KEYS, type PersonalityVector } from '@/src/features/survey/types';
import type { BreadTypeProfile, RankedBreadType } from '@/src/features/result/types';
import { BREAD_TYPES } from '@/src/shared/types/bread';

const NEUTRAL_PERSONALITY_VALUE = 50;
const MAX_PERSONALITY_DISTANCE_FROM_NEUTRAL = 49;

function centerPersonalityValue(value: number): number {
  return (value - NEUTRAL_PERSONALITY_VALUE) / MAX_PERSONALITY_DISTANCE_FROM_NEUTRAL;
}

export function calculateCosineSimilarity(
  userVector: PersonalityVector,
  breadVector: PersonalityVector,
): number {
  const dotProduct = PERSONALITY_VARIABLE_KEYS.reduce(
    (total, key) => total + centerPersonalityValue(userVector[key]) * centerPersonalityValue(breadVector[key]),
    0,
  );
  const userMagnitude = Math.sqrt(
    PERSONALITY_VARIABLE_KEYS.reduce(
      (total, key) => total + centerPersonalityValue(userVector[key]) ** 2,
      0,
    ),
  );
  const breadMagnitude = Math.sqrt(
    PERSONALITY_VARIABLE_KEYS.reduce(
      (total, key) => total + centerPersonalityValue(breadVector[key]) ** 2,
      0,
    ),
  );

  if (userMagnitude === 0 || breadMagnitude === 0) return 0;

  return (dotProduct / (userMagnitude * breadMagnitude) + 1) / 2;
}

export function rankBreadTypes(
  userVector: PersonalityVector,
  profiles: BreadTypeProfile[],
): RankedBreadType[] {
  return profiles
    .map((profile) => {
      const bread = BREAD_TYPES.find((item) => item.id === profile.id);

      if (!bread) return null;

      return {
        bread,
        similarity: calculateCosineSimilarity(userVector, profile.personality),
      };
    })
    .filter((result): result is RankedBreadType => result !== null)
    .sort((left, right) => right.similarity - left.similarity);
}
