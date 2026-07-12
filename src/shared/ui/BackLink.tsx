import { Pressable, Text } from 'react-native';

interface BackLinkProps {
  onPress: () => void;
}

export default function BackLink({ onPress }: BackLinkProps) {
  return (
    <Pressable onPress={onPress}>
      <Text className="font-yde-street-bold text-heading-h3 text-default-black">‹</Text>
    </Pressable>
  );
}
