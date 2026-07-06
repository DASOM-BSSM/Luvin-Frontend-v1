import { useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import CommentBubble from '@/src/shared/ui/CommentBubble';

const LETTER_DELAY_MS = 35;
const LINE_DELAY_MS = 280;

type TypewriterTextLinesVariant = 'text' | 'comment';

interface TypewriterTextLinesProps {
  lines: string[];
  variant?: TypewriterTextLinesVariant;
  containerClassName?: string;
  textClassName?: string;
  bubbleClassName?: string;
}

export default function TypewriterTextLines({
  lines,
  variant = 'text',
  containerClassName = 'gap-1',
  textClassName = 'text-body-s text-brown-1000',
  bubbleClassName = '',
}: TypewriterTextLinesProps) {
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
    <View className={containerClassName}>
      {visibleLines.map((line, index) =>
        variant === 'comment' ? (
          <CommentBubble
            key={`${lines[index]}-${index}`}
            text={line || ' '}
            className={bubbleClassName}
            textClassName={textClassName}
          />
        ) : (
          <Text key={`${lines[index]}-${index}`} className={`font-yde-street-light ${textClassName}`}>
            {line || ' '}
          </Text>
        ),
      )}
    </View>
  );
}
