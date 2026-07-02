import { useState } from 'react';
import { Pressable, View } from 'react-native';

import BreadNavIcon from '@/src/assets/icons/BreadNavIcon';
import CommentNavIcon from '@/src/assets/icons/CommentNavIcon';
import HomeNavIcon from '@/src/assets/icons/HomeNavIcon';
import OvenNavIcon from '@/src/assets/icons/OvenNavIcon';

export type NavTab = 'home' | 'oven' | 'avatar' | 'community';

interface BottomNavProps {
  activeTab?: NavTab;
  onTabChange?: (tab: NavTab) => void;
}

const ACTIVE_COLOR = '#522D13';
const INACTIVE_COLOR = '#E8CFBD';

const TABS: { id: NavTab; Icon: typeof HomeNavIcon }[] = [
  { id: 'home', Icon: HomeNavIcon },
  { id: 'oven', Icon: OvenNavIcon },
  { id: 'avatar', Icon: BreadNavIcon },
  { id: 'community', Icon: CommentNavIcon },
];

export default function BottomNav({ activeTab = 'home', onTabChange }: BottomNavProps) {
  const [selectedTab, setSelectedTab] = useState<NavTab>(activeTab);

  const handleTabPress = (tab: NavTab) => {
    setSelectedTab(tab);
    onTabChange?.(tab);
  };

  return (
    <View className="items-start overflow-hidden rounded-3xl bg-default-card px-7 py-3.5">
      <View className="w-full flex-row items-center justify-center gap-14">
        {TABS.map(({ id, Icon }) => (
          <Pressable key={id} onPress={() => handleTabPress(id)}>
            <Icon color={selectedTab === id ? ACTIVE_COLOR : INACTIVE_COLOR} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
