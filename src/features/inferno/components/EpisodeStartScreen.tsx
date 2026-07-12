import { Text, View } from 'react-native';

import EpisodeThumbnail from '@/src/features/inferno/components/EpisodeThumbnail';
import TypewriterTextLines from '@/src/features/inferno/components/TypewriterTextLines';
import type { EpisodeConfig } from '@/src/features/inferno/types';
import BackLink from '@/src/shared/ui/BackLink';
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
      <View className="w-full max-w-3xl gap-6">
        <View className="gap-3">
          <BackLink onPress={onPressBack} />
          <View className="gap-0.5">
            <Text className="font-yde-street-light text-body-s text-default-black">Luvin&apos;s inferno</Text>
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">러빈지옥</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-8">
          <EpisodeThumbnail
            episodeNumber={episode.number}
            title={episode.thumbnailTitle}
            className="w-2/5"
          />

          <View className="flex-1 items-start gap-4">
            <TypewriterTextLines lines={episode.quoteLines} />
            <ChoiceButton label={episode.startButtonLabel} selected onPress={onPressStart} />
          </View>
        </View>
      </View>
    </View>
  );
}
