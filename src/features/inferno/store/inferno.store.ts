import { create } from 'zustand';

import { MAX_EPISODE_NUMBER } from '@/src/features/inferno/data/episodes';
import type { BreadTypeId } from '@/src/shared/types/bread';

interface InfernoState {
  /** Episode number the user will see next when they open 러빈지옥. */
  currentEpisode: number;
  firstImpressionVote: BreadTypeId | null;
  setFirstImpressionVote: (type: BreadTypeId) => void;
  /** Marks the current episode as finished and advances to the next one. */
  completeEpisode: () => void;
}

// Intentionally not persisted while the episode flow is still being tested end-to-end,
// so every app reload starts back at episode 1. Re-add zustand's `persist` middleware
// (see auth.store.ts for the MMKV pattern) once the flow is finalized.
export const useInfernoStore = create<InfernoState>()((set, get) => ({
  currentEpisode: 1,
  firstImpressionVote: null,
  setFirstImpressionVote: (type: BreadTypeId) => {
    set({ firstImpressionVote: type });
  },
  completeEpisode: () => {
    const { currentEpisode } = get();
    set({ currentEpisode: Math.min(currentEpisode + 1, MAX_EPISODE_NUMBER) });
  },
}));
