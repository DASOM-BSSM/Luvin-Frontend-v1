import { Text, View } from 'react-native';

import AvatarCharacter from '@/src/shared/ui/AvatarCharacter';
import ButterCharacter from '@/src/shared/ui/ButterCharacter';
import CommentBubble from '@/src/shared/ui/CommentBubble';
import NextStepLink from '@/src/features/inferno/components/NextStepLink';

interface EpisodeCatfishIntroScreenProps {
  onPressNext: () => void;
}

export default function EpisodeCatfishIntroScreen({
  onPressNext,
}: EpisodeCatfishIntroScreenProps) {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl flex-row items-center justify-between">
        <View className="gap-6">
          <View className="gap-1">
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">
              러빈지옥 메기를 소개할게요
            </Text>
            <Text className="font-yde-street-light text-body-s text-brown-1000">
              메기는 흐름을 좋게 바꿀 수도, 안 좋게 바꿀 수도 있어요
            </Text>
          </View>
          <View className="w-[340px] rounded-xl bg-default-card px-5 py-5">
            <View className="flex-row items-center gap-4">
              <ButterCharacter className="h-14 w-20" />
              <View className="gap-1">
                <Text className="font-yde-street-bold text-heading-h3 text-default-black">
                  느긋한 녹은 버터 메기
                </Text>
                <Text className="font-yde-street-light text-body-xs text-brown-1000">
                  저는 뭐든 느긋하게 시작해요
                </Text>
              </View>
            </View>
            <View className="h-4" />
            <Text className="font-yde-street-light text-body-xs text-brown-1000">
              # 러빈지옥의 흐름을 바꿀 메기{'\n'}
              # 내가 좋아하는 사람에게는 무조건 직진형{'\n'}
              # 여유롭고 느긋한 성격
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-4">
          <AvatarCharacter className="h-20 w-14" />
          <CommentBubble
            text={'“러빈지옥 메기에게는 이성들과\n1:1 대화권이 주어져요”'}
            textClassName="text-body-s"
          />
        </View>
      </View>
      <NextStepLink onPress={onPressNext} />
    </View>
  );
}
