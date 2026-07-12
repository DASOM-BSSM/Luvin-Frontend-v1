import { Pressable, Text } from 'react-native';

interface NextStepLinkProps {
  onPress: () => void;
}

export default function NextStepLink({ onPress }: NextStepLinkProps) {
  return (
    <Pressable className="absolute bottom-4 right-8" onPress={onPress}>
      <Text className="font-yde-street-light text-body-xs text-text-muted">다음</Text>
    </Pressable>
  );
}
