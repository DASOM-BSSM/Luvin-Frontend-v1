import { View } from 'react-native';

import TypewriterTextLines from '@/src/features/inferno/components/TypewriterTextLines';
import type { EpisodeConfig } from '@/src/features/inferno/types';
import AvatarCharacter from '@/src/shared/ui/AvatarCharacter';
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
          <View className="flex-1 flex-row items-center self-center">
            <AvatarCharacter className="w-28 aspect-[86/128.2]" />
            <TypewriterTextLines
              lines={episode.hostExplainMessages}
              variant="comment"
              containerClassName="flex-1 gap-2"
              bubbleClassName="self-start rounded-br-chat rounded-tl-chat rounded-tr-chat px-6 py-3"
              textClassName="text-body-s"
            />
          </View>
        )}
        <ChoiceButton label={actionLabel} selected onPress={onPressAction} />
      </View>
    </View>
  );
}
