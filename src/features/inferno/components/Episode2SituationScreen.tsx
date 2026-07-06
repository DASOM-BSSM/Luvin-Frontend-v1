import { Pressable, Text, View } from 'react-native';

import OvenIllustration from '@/src/shared/ui/OvenIllustration';
import TrolleyIllustration from '@/src/shared/ui/TrolleyIllustration';

interface Episode2SituationScreenProps {
  onPressTrolley: () => void;
  onPressOven: () => void;
}

export default function Episode2SituationScreen({
  onPressTrolley,
  onPressOven,
}: Episode2SituationScreenProps) {
  return (
    <View className="flex-1 justify-center px-11">
      <View className="gap-2">
        <Text className="font-yde-street-bold text-heading-h2 text-default-black">
          투표 결과에 따라 상황이 나뉘었어요
        </Text>
        <Text className="font-yde-street-light text-body-s text-brown-1000">
          매칭 된 커플 상황과 매칭이 안 된 상황을 골라서 볼 수 있어요
        </Text>
      </View>
      <View className="h-6" />
      <View className="w-full flex-row items-center justify-center gap-24">
        <Pressable className="items-center gap-3 rounded-xl px-7 py-3" onPress={onPressTrolley}>
          <View className="h-28 flex-row items-end">
            <TrolleyIllustration className="h-28 w-36" />
            <View className="w-5" />
            <View className="h-14 w-20 rounded-md border border-neutral-500 bg-default-white" />
          </View>
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">지옥도 이야기</Text>
        </Pressable>
        <Pressable className="items-center gap-3 rounded-xl px-7 py-3" onPress={onPressOven}>
          <OvenIllustration className="h-28 w-40" />
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">천국도 이야기</Text>
        </Pressable>
      </View>
    </View>
  );
}
