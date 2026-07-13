import { Pressable, Text } from 'react-native';

import NextStepLink from '@/src/features/inferno/components/NextStepLink';

interface Episode2ConversationActionsProps {
  onPressBackToSituation?: () => void;
  onPressNext: () => void;
}

export default function Episode2ConversationActions({
  onPressBackToSituation,
  onPressNext,
}: Episode2ConversationActionsProps) {
  return (
    <>
      {onPressBackToSituation && (
        <Pressable
          accessibilityLabel="이전 단계로 이동"
          accessibilityRole="button"
          className="absolute bottom-2 left-4 h-11 w-11 items-center justify-center"
          hitSlop={8}
          onPress={onPressBackToSituation}
        >
          <Text className="font-yde-street-bold text-heading-h4 text-text-muted">이전</Text>
        </Pressable>
      )}
      <NextStepLink onPress={onPressNext} />
    </>
  );
}
