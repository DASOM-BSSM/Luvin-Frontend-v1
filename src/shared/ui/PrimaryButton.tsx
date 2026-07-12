import { Pressable, Text, View } from "react-native";

type PrimaryButtonTextWeight = "light" | "bold";
type PrimaryButtonTextSize = "body-s" | "heading-h5";

interface PrimaryButtonProps {
  label: string;
  selected?: boolean;
  textWeight?: PrimaryButtonTextWeight;
  textSize?: PrimaryButtonTextSize;
  onPress?: () => void;
}

const TEXT_WEIGHT_CLASS: Record<PrimaryButtonTextWeight, string> = {
  light: "font-yde-street-light",
  bold: "font-yde-street-bold",
};

const TEXT_SIZE_CLASS: Record<PrimaryButtonTextSize, string> = {
  "body-s": "text-body-s",
  "heading-h5": "text-heading-h5",
};

export default function PrimaryButton({
  label,
  selected = false,
  textWeight = "light",
  textSize = "body-s",
  onPress,
}: PrimaryButtonProps) {
  return (
    <Pressable className="w-full" onPress={onPress}>
      {({ pressed }) => {
        const isActive = selected || pressed;
        return (
          <View
            className={`w-full aspect-[60/7] items-center justify-center rounded-xl px-4 py-2 ${
              isActive ? "bg-default-black" : "bg-default-bg border border-default-black"
            }`}
          >
            <Text
              className={`text-center ${TEXT_WEIGHT_CLASS[textWeight]} ${TEXT_SIZE_CLASS[textSize]} ${
                isActive ? "text-default-bg" : "text-default-black"
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
