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

interface NavButtonProps {
  id: NavTab;
  active: boolean;
  Icon: typeof HomeNavIcon;
  onTabChange?: (tab: NavTab) => void;
}

function NavButton({ id, active, Icon, onTabChange }: NavButtonProps) {
  const handlePress = () => {
    onTabChange?.(id);
  };

  return (
    <Pressable onPress={handlePress}>
      <Icon className={active ? ACTIVE_FILL_CLASS : INACTIVE_FILL_CLASS} />
    </Pressable>
  );
}

export default function BottomNav({ activeTab = 'home', onTabChange }: BottomNavProps) {
  return (
    <View className="w-[85%] self-center overflow-hidden rounded-3xl bg-default-card px-[8%] py-3.5">
      <View className="w-full flex-row items-center justify-between">
        {TABS.map(({ id, Icon }) => (
          <NavButton
            key={id}
            id={id}
            active={activeTab === id}
            Icon={Icon}
            onTabChange={onTabChange}
          />
        ))}
      </View>
    </View>
  );
}
