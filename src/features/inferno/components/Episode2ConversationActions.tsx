import { Pressable, Text, View } from 'react-native';

interface Episode2ConversationActionsProps {
  onPressBackToSituation?: () => void;
  onPressNext: () => void;
}

export default function Episode2ConversationActions({
  onPressBackToSituation,
  onPressNext,
}: Episode2ConversationActionsProps) {
  return (
    <View className="flex-row items-center justify-end gap-3 px-8 py-4">
      {onPressBackToSituation && (
        <Pressable
          className="rounded-xl border border-yellow-400 bg-yellow-200 px-4 py-1.5"
          onPress={onPressBackToSituation}
        >
          <Text className="font-yde-street-light text-body-xs text-default-black">
            상황 선택으로 돌아가기
          </Text>
        </Pressable>
      )}
      <Pressable onPress={onPressNext}>
        <Text className="font-yde-street-light text-body-xs text-text-muted">다음</Text>
      </Pressable>
    </View>
  );
}
