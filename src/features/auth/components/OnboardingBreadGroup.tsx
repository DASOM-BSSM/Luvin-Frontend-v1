import { View } from "react-native";

import BreadCharacter from "@/src/shared/ui/BreadCharacter";

export default function OnboardingBreadGroup() {
  return (
    <View className="w-[72%] aspect-[216.5/157]">
      <BreadCharacter type="salt" className="absolute left-0 top-[5%] w-[33%] aspect-[71.4/48.2]" />
      <BreadCharacter type="castella" className="absolute left-[40%] top-0 w-[24.5%] aspect-[53/43]" />
      <BreadCharacter type="cream" className="absolute left-[71%] top-[5%] w-[28.7%] aspect-[62.1/42.7]" />
      <BreadCharacter type="pretzel" className="absolute left-[17%] top-[34%] w-[27%] aspect-[58.5/46.9]" />
      <BreadCharacter type="baguette" className="absolute left-[49%] top-[32%] w-[29.6%] aspect-[64.2/52.7]" />
      <BreadCharacter type="redbean" className="absolute left-[1.6%] top-[65.5%] w-[28.7%] aspect-[62.1/42.6]" />
      <BreadCharacter type="donut" className="absolute left-[71%] top-[56.8%] w-[26.9%] aspect-[58.2/56.2]" />
      <BreadCharacter type="madeleine" className="absolute left-[37.5%] top-[72.2%] w-[26.6%] aspect-[57.7/43.6]" />
    </View>
  );
}
