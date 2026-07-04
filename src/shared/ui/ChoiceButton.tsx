import { useState } from 'react';
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
  const [hovered, setHovered] = useState(false);

  const handleHoverIn = () => {
    setHovered(true);
  };

  const handleHoverOut = () => {
    setHovered(false);
  };

  return (
    <Pressable
      className={className}
      onPress={onPress}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
    >
      {({ pressed }) => {
        const isActive = selected || hovered || pressed;
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
