import { Text, View } from 'react-native';

import OutlineLinkButton from '@/src/shared/ui/OutlineLinkButton';

interface InfernoStartCardProps {
  status?: 'idle' | 'waiting';
  matchedCount?: number;
  totalCount?: number;
  className?: string;
  onPressJoin?: () => void;
}

export default function InfernoStartCard({
  status = 'idle',
  matchedCount = 3,
  totalCount = 6,
  className = 'w-full',
  onPressJoin,
}: InfernoStartCardProps) {
  return (
    <View className={`${className} items-center rounded-xl bg-default-card px-7.5 py-4`}>
      {status === 'idle' && (
        <View className="w-full items-center gap-2.5">
          <Text className="font-yde-street-light text-body-s text-text-primary text-center">
            내 반죽과 가장 잘 맞는 반죽을 찾아주세요!
          </Text>
          <OutlineLinkButton label="러빈지옥 참가하기" onPress={onPressJoin} />
        </View>
      )}
      {status === 'waiting' && (
        <View className="w-full items-center gap-1">
          <Text className="font-yde-street-light text-body-s text-text-primary text-center">
            매칭이 완료 되면 시작 알림을 전송해드릴게요!
          </Text>
          <Text className="font-yde-street-light text-body-xs text-text-primary text-center">
            현재 매칭 인원 : {matchedCount}/{totalCount}
          </Text>
        </View>
      )}
    </View>
  );
}
