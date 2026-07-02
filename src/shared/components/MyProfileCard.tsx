import { Text, View } from 'react-native';

import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import OutlineLinkButton from '@/src/shared/ui/OutlineLinkButton';
import type { BreadTypeId } from '@/src/shared/types/bread';

interface MyProfileCardProps {
  status?: 'noquestion' | 'default';
  breadType?: BreadTypeId;
  temperature?: number;
  onPressSurvey?: () => void;
}

export default function MyProfileCard({
  status = 'noquestion',
  breadType = 'donut',
  temperature = 0,
  onPressSurvey,
}: MyProfileCardProps) {
  if (status === 'noquestion') {
    return (
      <View className="w-[360px] items-center gap-2.5 rounded-xl bg-default-card px-7.5 py-4">
        <Text className="font-yde-street-light text-body-s text-text-primary text-center">
          설문을 진행하고 나만의 반죽을 만들어요
        </Text>
        <OutlineLinkButton label="설문 바로가기" onPress={onPressSurvey} />
      </View>
    );
  }

  return (
    <View className="w-[360px] items-center gap-3 rounded-xl bg-default-card px-7.5 py-4.5">
      <View className="flex-row items-center gap-3">
        <BreadCharacter type={breadType} variant="dough" className="w-[54px] h-[50px] shrink-0" />
        <View className="flex-1 gap-0">
          <View className="flex-row items-start gap-2">
            <Text className="font-yde-street-bold text-heading-h4 text-text-primary">나의 반죽</Text>
            <Text className="font-yde-street-bold text-heading-h4 text-text-primary">
              {temperature}℃
            </Text>
          </View>
          <Text className="font-yde-street-light text-body-xs text-text-primary">
            새로운 반죽과의 만남을 시작해보세요
          </Text>
        </View>
      </View>
    </View>
  );
}
