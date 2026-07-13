import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';
import { Text, View } from 'react-native';

cssInterop(Image, { className: 'style' });

export default function InfernoSystemIntro() {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl items-center gap-6">
        <View className="w-full gap-1">
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">
            러빈지옥 시스템을 소개할게요
          </Text>
          <Text className="font-yde-street-light text-body-m text-default-black">
            러빈지옥의 지옥도는 빵 트롤리이고, 천국도는 오븐이에요
          </Text>
        </View>

        <View className="flex-row items-end gap-20">
          <View className="items-center gap-3">
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">{'<지옥도>'}</Text>
            <Image
              source={require('@/src/assets/images/trolley.png')}
              contentFit="contain"
              className="h-40 w-60"
            />
          </View>

          <View className="items-center gap-3">
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">{'<천국도>'}</Text>
            <Image
              source={require('@/src/assets/images/oven.png')}
              contentFit="contain"
              className="h-40 w-60"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
