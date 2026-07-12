import { Pressable, Text, View } from 'react-native';

interface OutlineLinkButtonProps {
  label: string;
  onPress?: () => void;
}

export default function OutlineLinkButton({ label, onPress }: OutlineLinkButtonProps) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => {
        const isActive = pressed;
        return (
          <View
            className={`items-end justify-end rounded-xl border border-default-black px-5 py-1.5 ${
              isActive ? 'bg-default-black' : 'bg-default-bg'
            }`}
          >
            <Text
              className={`font-yde-street-light text-body-xs ${
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
