import { View } from 'react-native';

import InfernoHostIntro from '@/src/features/inferno/components/InfernoHostIntro';
import type { EpisodeConfig } from '@/src/features/inferno/types';
import ChoiceButton from '@/src/shared/ui/ChoiceButton';

interface EpisodeHostExplainScreenProps {
  episode: EpisodeConfig;
  actionLabel?: string;
  onPressAction: () => void;
}

export default function EpisodeHostExplainScreen({
  episode,
  actionLabel = '에피소드 끝내기',
  onPressAction,
}: EpisodeHostExplainScreenProps) {
  return (
    <View className="flex-1 items-center justify-center px-8">
      <View
        className={`w-full max-w-3xl flex-row items-center gap-8 ${
          episode.hostExplainMessages ? 'justify-between' : 'justify-center'
        }`}
      >
        {episode.hostExplainMessages && (
          <InfernoHostIntro
            message={episode.hostExplainMessages}
            className="flex-1"
            avatarClassName="w-28 aspect-[86/128.2]"
            bubbleClassName="self-start rounded-br-chat rounded-tl-chat rounded-tr-chat px-6 py-3"
            textClassName="text-body-s"
          />
        )}
        <ChoiceButton label={actionLabel} selected onPress={onPressAction} />
      </View>
    </View>
  );
}
