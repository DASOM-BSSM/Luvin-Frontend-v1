import { Pressable, Text } from 'react-native';

interface BackLinkProps {
  onPress: () => void;
}

export default function BackLink({ onPress }: BackLinkProps) {
  return (
    <Pressable
      accessibilityLabel="이전 화면으로 이동"
      accessibilityRole="button"
      className="h-11 w-11 items-center justify-center"
      hitSlop={8}
      onPress={onPress}
    >
      <Text className="font-yde-street-bold text-heading-h3 text-default-black">‹</Text>
    </Pressable>
  );
}
