import { Pressable, Text } from 'react-native';

interface BackLinkProps {
  onPress: () => void;
  className?: string;
}

export default function BackLink({
  onPress,
  className = 'h-11 w-11 items-center justify-center',
}: BackLinkProps) {
  return (
    <Pressable
      accessibilityLabel="이전 화면으로 이동"
      accessibilityRole="button"
      className={className}
      hitSlop={8}
      onPress={onPress}
    >
      <Text className="font-yde-street-bold text-heading-h1 text-default-black">‹</Text>
    </Pressable>
  );
}
