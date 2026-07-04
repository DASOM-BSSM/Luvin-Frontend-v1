import { Text, View } from "react-native";

import OnboardingBreadGroup from "@/src/features/auth/components/OnboardingBreadGroup";
import { useAuthStore } from "@/src/shared/store/auth.store";
import AppScreen from "@/src/shared/ui/AppScreen";
import PrimaryButton from "@/src/shared/ui/PrimaryButton";

export default function OnboardingScreen() {
  const login = useAuthStore(state => state.login);

  const handlePreheatPress = () => {
    login();
  };

  return (
    <AppScreen>
      <View className="flex-1 justify-center">
        <View className="items-center gap-[8%]">
          <View className="w-full gap-9">
            <View className="gap-0.5 px-1">
              <Text className="font-yde-street-bold text-heading-h2 text-default-black">사랑은 타이밍이에요</Text>
              <Text className="font-yde-street-light text-body-s text-default-black">
                너무 빠르면 덜 익고, 너무 늦으면 타버리니깐요
              </Text>
            </View>

            <View className="items-center">
              <OnboardingBreadGroup />
            </View>
          </View>

          <View className="items-center gap-2">
            <PrimaryButton
              label="나의 오븐 예열하기"
              selected
              textSize="heading-h5"
              textWeight="bold"
              onPress={handlePreheatPress}
            />
            <Text className="font-yde-street-light text-body-xs text-text-muted">구글 계정으로 로그인 됩니다</Text>
          </View>
        </View>
      </View>
    </AppScreen>
  );
}
