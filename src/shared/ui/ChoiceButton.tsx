import { Pressable, Text, View } from 'react-native';

interface ChoiceButtonProps {
  label: string;
  selected?: boolean;
  className?: string;
  onPress?: () => void;
}

export default function ChoiceButton({
  label,
  selected = false,
  className = 'self-start',
  onPress,
}: ChoiceButtonProps) {
  return (
    <Pressable className={className} onPress={onPress}>
      {({ pressed }) => {
        const isActive = selected || pressed;
        return (
          <View
            className={`items-center justify-center rounded-xl border px-5 py-1.5 ${
              isActive ? 'bg-yellow-300 border-yellow-400' : 'bg-yellow-200 border-yellow-300'
            }`}
          >
            <Text className="font-yde-street-light text-body-s text-default-black">{label}</Text>
          </View>
        );
      }}
    </Pressable>
  );
}
