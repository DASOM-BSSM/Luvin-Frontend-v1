import type { PersonalityVector } from '@/src/features/survey/types';
import type { BreadTypeId, BreadTypeInfo } from '@/src/shared/types/bread';

export interface BreadTypeProfile {
  id: BreadTypeId;
  personality: PersonalityVector;
}

export interface RankedBreadType {
  bread: BreadTypeInfo;
  similarity: number;
}
