import { router, type Href } from 'expo-router';
import { useCallback } from 'react';

import type { NavTab } from '@/src/shared/ui/BottomNav';

const INFERNO_ROUTE = '/inferno' as Href;
const SURVEY_ROUTE = '/survey' as Href;
const COMMUNITY_ROUTE = '/community' as Href;

export default function useBottomNavRoute() {
  const handleTabChange = useCallback((tab: NavTab) => {
    if (tab === 'home') {
      router.push('/');
      return;
    }

    if (tab === 'oven') {
      router.push(INFERNO_ROUTE);
      return;
    }

    if (tab === 'avatar') {
      router.push(SURVEY_ROUTE);
      return;
    }

    router.push(COMMUNITY_ROUTE);
  }, []);

  return handleTabChange;
}
