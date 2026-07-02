import { View } from 'react-native';

import LuvinLogo from '@/src/shared/ui/LuvinLogo';
import NotificationBell from '@/src/shared/ui/NotificationBell';

export default function PageHeader() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <LuvinLogo />
      <NotificationBell />
    </View>
  );
}
