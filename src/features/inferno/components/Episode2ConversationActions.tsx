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
          className="absolute bottom-4 right-20 rounded-xl border border-yellow-400 bg-yellow-200 px-4 py-1.5"
          onPress={onPressBackToSituation}
        >
          <Text className="font-yde-street-light text-body-xs text-default-black">
            상황 선택으로 돌아가기
          </Text>
        </Pressable>
      )}
      <NextStepLink onPress={onPressNext} />
    </>
  );
}
