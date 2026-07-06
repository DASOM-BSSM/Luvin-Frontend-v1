import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import EpisodeThumbnail from '@/src/features/inferno/components/EpisodeThumbnail';
import type { EpisodeConfig } from '@/src/features/inferno/types';
import ChoiceButton from '@/src/shared/ui/ChoiceButton';

const LETTER_DELAY_MS = 35;
const LINE_DELAY_MS = 280;

interface EpisodeStartScreenProps {
  episode: EpisodeConfig;
  onPressBack: () => void;
  onPressStart: () => void;
}

interface EpisodeBackButtonProps {
  onPress: () => void;
}

function EpisodeBackButton({ onPress }: EpisodeBackButtonProps) {
  return (
    <Pressable className="self-start" onPress={onPress}>
      {({ pressed }) => (
        <View
          className={`items-center justify-center rounded-xl border border-yellow-400 px-4 py-1 ${
            pressed ? 'bg-yellow-300' : 'bg-default-bg'
          }`}
        >
          <Text className="font-yde-street-light text-body-xs text-brown-1000">이전</Text>
        </View>
      )}
    </Pressable>
  );
}

interface TypewriterQuoteProps {
  lines: string[];
}

function TypewriterQuote({ lines }: TypewriterQuoteProps) {
  const lineCharacters = useMemo(() => lines.map((line) => Array.from(line)), [lines]);
  const [visibleLines, setVisibleLines] = useState(() => lines.map(() => ''));

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let isMounted = true;

    const handleTypeNextCharacter = (lineIndex: number, characterIndex: number) => {
      const currentLineCharacters = lineCharacters[lineIndex];

      if (!isMounted || !currentLineCharacters) return;

      if (characterIndex < currentLineCharacters.length) {
        setVisibleLines((currentLines) =>
          currentLines.map((line, currentLineIndex) =>
            currentLineIndex === lineIndex
              ? currentLineCharacters.slice(0, characterIndex + 1).join('')
              : line,
          ),
        );

        timeoutId = setTimeout(
          () => handleTypeNextCharacter(lineIndex, characterIndex + 1),
          LETTER_DELAY_MS,
        );
        return;
      }

      if (lineIndex < lineCharacters.length - 1) {
        timeoutId = setTimeout(
          () => handleTypeNextCharacter(lineIndex + 1, 0),
          LINE_DELAY_MS,
        );
      }
    };

    setVisibleLines(lines.map(() => ''));
    handleTypeNextCharacter(0, 0);

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lineCharacters, lines]);

  return (
    <View className="gap-1">
      {visibleLines.map((line, index) => (
        <Text key={`${lines[index]}-${index}`} className="font-yde-street-light text-body-s text-brown-1000">
          {line || ' '}
        </Text>
      ))}
    </View>
  );
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
          <EpisodeBackButton onPress={onPressBack} />
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
            <TypewriterQuote lines={episode.quoteLines} />
            <ChoiceButton label={episode.startButtonLabel} selected onPress={onPressStart} />
          </View>
        </View>
      </View>
    </View>
  );
}
