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

const ACTIVE_FILL_CLASS = 'fill-brown-900';
const INACTIVE_FILL_CLASS = 'fill-brown-300';

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
    <View className="w-[360px] self-center overflow-hidden rounded-3xl bg-default-card px-7 py-5">
      <View className="w-full flex-row items-center justify-center gap-14">
        {TABS.map(({ id, Icon }) => (
          <Pressable key={id} onPress={() => handleTabPress(id)}>
            <Icon className={selectedTab === id ? ACTIVE_FILL_CLASS : INACTIVE_FILL_CLASS} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
