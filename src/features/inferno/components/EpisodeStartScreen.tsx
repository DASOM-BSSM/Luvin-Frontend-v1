import { Text, View } from 'react-native';

import EpisodeThumbnail from '@/src/features/inferno/components/EpisodeThumbnail';
import type { EpisodeConfig } from '@/src/features/inferno/types';
import ChoiceButton from '@/src/shared/ui/ChoiceButton';

interface EpisodeStartScreenProps {
  episode: EpisodeConfig;
  onPressStart: () => void;
}

export default function EpisodeStartScreen({ episode, onPressStart }: EpisodeStartScreenProps) {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl gap-8">
        <View className="gap-0.5">
          <Text className="font-yde-street-light text-body-s text-default-black">Luvin&apos;s inferno</Text>
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">러빈지옥</Text>
        </View>

        <View className="flex-row items-center gap-8">
          <EpisodeThumbnail
            episodeNumber={episode.number}
            title={episode.thumbnailTitle}
            className="w-2/5"
          />

          <View className="flex-1 items-start gap-4">
            <View className="gap-1">
              {episode.quoteLines.map((line) => (
                <Text key={line} className="font-yde-street-light text-body-s text-brown-1000">
                  {line}
                </Text>
              ))}
            </View>
            <ChoiceButton label={episode.startButtonLabel} selected onPress={onPressStart} />
          </View>
        </View>
      </View>
    </View>
  );
}
