import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

interface PrimaryButtonProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

export default function PrimaryButton({ label, selected = false, onPress }: PrimaryButtonProps) {
  const [hovered, setHovered] = useState(false);

  const handleHoverIn = () => {
    setHovered(true);
  };

  const handleHoverOut = () => {
    setHovered(false);
  };

  return (
    <Pressable
      className="self-start"
      onPress={onPress}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
    >
      {({ pressed }) => {
        const isActive = selected || hovered || pressed;
        return (
          <View
            className={`w-[300px] items-center justify-center rounded-xl px-4 py-2 ${
              isActive ? 'bg-default-black' : 'bg-default-bg border border-default-black'
            }`}
          >
            <Text
              className={`text-center font-yde-street-light text-body-s ${
                isActive ? 'text-default-bg' : 'text-default-black'
              }`}
            >
              {label}
            </Text>
          </View>
        );
      }}
    </Pressable>
  );
}
