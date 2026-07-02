import { Text, View } from 'react-native';

interface EpisodeThumbnailProps {
  episodeNumber: number;
  title: string;
  className?: string;
}

export default function EpisodeThumbnail({
  episodeNumber,
  title,
  className = 'w-full',
}: EpisodeThumbnailProps) {
  return (
    <View
      className={`${className} aspect-[20/9] justify-between rounded-xl border-2 border-dashed border-pink-400 py-3 pl-6 pr-3`}
    >
      <View className="flex-row items-center gap-1">
        <View className="size-2 rounded-full bg-pink-400" />
        <Text className="font-yde-street-light text-body-xs text-pink-400">REC</Text>
      </View>
      <View className="gap-0.5">
        <Text className="font-yde-street-light text-body-s text-text-primary">
          Episode {String(episodeNumber).padStart(2, '0')}.
        </Text>
        <Text className="font-yde-street-bold text-heading-h4 text-default-black">{title}</Text>
      </View>
    </View>
  );
}
