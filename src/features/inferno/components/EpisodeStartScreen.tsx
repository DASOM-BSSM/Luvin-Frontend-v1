import { Pressable, Text, View } from 'react-native';

import EpisodeThumbnail from '@/src/features/inferno/components/EpisodeThumbnail';
import TypewriterTextLines from '@/src/features/inferno/components/TypewriterTextLines';
import type { EpisodeConfig } from '@/src/features/inferno/types';
import ChoiceButton from '@/src/shared/ui/ChoiceButton';

interface EpisodeStartScreenProps {
  episode: EpisodeConfig;
  onPressBack: () => void;
  onPressStart: () => void;
}

export default function EpisodeStartScreen({
  episode,
  onPressBack,
  onPressStart,
}: EpisodeStartScreenProps) {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="gap-4">
        <View className="flex-row items-center justify-between">
          <View className="gap-1">
            <Text className="font-yde-street-light text-body-s text-default-black">Luvin&apos;s inferno</Text>
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">러빈지옥</Text>
          </View>

          <Pressable
            accessibilityLabel="이전 화면으로 이동"
            accessibilityRole="button"
            className="h-9 items-center justify-center px-2"
            hitSlop={8}
            onPress={onPressBack}
          >
            <Text className="font-yde-street-light text-body-xs text-text-muted">이전</Text>
          </Pressable>
        </View>

        <View className="flex-row items-center gap-12">
          <EpisodeThumbnail
            episodeNumber={episode.number}
            title={episode.thumbnailTitle}
            className="w-96"
          />

          <View className="w-80 items-start gap-4">
            <TypewriterTextLines lines={episode.quoteLines} />
            <ChoiceButton label={episode.startButtonLabel} selected onPress={onPressStart} />
          </View>
        </View>
      </View>
    </View>
  );
}
