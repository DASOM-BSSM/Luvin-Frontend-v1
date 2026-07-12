import { Pressable, Text } from 'react-native';

interface NextStepLinkProps {
  onPress: () => void;
}

export default function NextStepLink({ onPress }: NextStepLinkProps) {
  return (
    <Pressable
      accessibilityLabel="다음 단계로 이동"
      accessibilityRole="button"
      className="absolute bottom-2 right-4 h-11 w-11 items-center justify-center"
      hitSlop={8}
      onPress={onPress}
    >
      <Text className="font-yde-street-bold text-heading-h4 text-text-muted">다음</Text>
    </Pressable>
  );
}
