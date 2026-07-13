import { Pressable, Text, View } from "react-native";

type PrimaryButtonTextWeight = "light" | "bold";
type PrimaryButtonTextSize = "body-s" | "heading-h5";
type PrimaryButtonTone = "default" | "muted";

interface PrimaryButtonProps {
  label: string;
  selected?: boolean;
  tone?: PrimaryButtonTone;
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

const TONE_CLASS: Record<PrimaryButtonTone, string> = {
  default: "bg-default-bg border border-default-black",
  muted: "bg-default-bg border border-neutral-500",
};

const TONE_TEXT_CLASS: Record<PrimaryButtonTone, string> = {
  default: "text-default-black",
  muted: "text-text-muted",
};

export default function PrimaryButton({
  label,
  selected = false,
  tone = "default",
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
              isActive ? "bg-default-black" : TONE_CLASS[tone]
            }`}
          >
            <Text
              className={`text-center ${TEXT_WEIGHT_CLASS[textWeight]} ${TEXT_SIZE_CLASS[textSize]} ${
                isActive ? "text-default-bg" : TONE_TEXT_CLASS[tone]
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
