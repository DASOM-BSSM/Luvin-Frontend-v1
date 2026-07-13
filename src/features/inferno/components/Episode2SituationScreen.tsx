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
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl items-center gap-6">
        <View className="w-full gap-1">
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">
            투표 결과에 따라 상황이 나뉘었어요
          </Text>
          <Text className="font-yde-street-light text-body-s text-brown-1000">
            매칭 된 커플 상황과 매칭이 안 된 상황을 골라서 볼 수 있어요
          </Text>
        </View>
        <View className="w-full flex-row items-start justify-center gap-20">
          <Pressable className="items-center gap-3" onPress={onPressTrolley}>
            <TrolleyIllustration className="h-40 w-60" />
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">지옥도 이야기</Text>
          </Pressable>
          <Pressable className="items-center gap-3" onPress={onPressOven}>
            <OvenIllustration className="h-40 w-60" />
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">천국도 이야기</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
