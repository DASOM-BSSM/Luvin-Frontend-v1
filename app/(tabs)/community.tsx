import { Text, View } from 'react-native';

import AppScreen from '@/src/shared/ui/AppScreen';
import BottomNav from '@/src/shared/ui/BottomNav';
import PageHeader from '@/src/shared/ui/PageHeader';
import useBottomNavRoute from '@/src/shared/hooks/useBottomNavRoute';

export default function CommunityComingSoonScreen() {
  const handleTabChange = useBottomNavRoute();

  return (
    <AppScreen footer={<BottomNav activeTab="community" onTabChange={handleTabChange} />}>
      <View className="flex-1 gap-8">
        <PageHeader />
        <View className="w-full flex-1 justify-center self-center">
          <View className="items-center gap-2 rounded-xl bg-default-card px-7.5 py-8">
            <Text className="font-yde-street-bold text-heading-h3 text-default-black">
              베이킹노트
            </Text>
            <Text className="text-center font-yde-street-light text-body-s text-text-muted">
              준비 중
            </Text>
          </View>
        </View>
      </View>
    </AppScreen>
  );
}
