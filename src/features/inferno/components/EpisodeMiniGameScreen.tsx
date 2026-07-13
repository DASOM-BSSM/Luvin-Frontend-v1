import { Pressable, Text, View } from 'react-native';

import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import NextStepLink from '@/src/features/inferno/components/NextStepLink';

type MiniGameKind = 'memory' | 'quiz';

interface EpisodeMiniGameScreenProps {
  kind: MiniGameKind;
  onComplete: () => void;
}

const QUIZ_OPTIONS = ['규장각 육성', '호포제 실시', '서원 철폐'];

function MemoryGame() {
  return (
    <View className="gap-3">
      {[0, 1].map((row) => (
        <View key={row} className="flex-row gap-3">
          {Array.from({ length: 7 }).map((_, index) => {
            const cardIndex = row * 7 + index;
            const isOpen = cardIndex === 1 || cardIndex === 7;

            return (
              <View
                key={cardIndex}
                className={`h-15 w-20 items-center justify-center rounded-xl border bg-default-card ${
                  isOpen ? 'border-yellow-300' : 'border-neutral-300'
                }`}
              >
                {isOpen && (
                  <BreadCharacter type="madeleine" variant="dough" className="h-10 w-14" />
                )}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

function QuizGame({ onComplete }: { onComplete: () => void }) {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Text className="w-[300px] text-center font-yde-street-light text-body-l text-default-black">
        Q. 흥선대원군이 실행하지 않은{'\n'}정책으로 옳은 것은?
      </Text>
      <View className="w-[300px] gap-4">
        {QUIZ_OPTIONS.map((option) => (
          <Pressable
            key={option}
            className="items-center rounded-xl border border-neutral-300 bg-default-card px-6 py-3"
            onPress={onComplete}
          >
            <Text className="font-yde-street-light text-body-s text-default-black">{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default function EpisodeMiniGameScreen({ kind, onComplete }: EpisodeMiniGameScreenProps) {
  const isQuiz = kind === 'quiz';

  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl items-center gap-6">
        <View className="w-full gap-1">
          <Text className="font-yde-street-bold text-heading-h2 text-default-black">
            사용자 참여형 미니게임이에요
          </Text>
          <Text className="font-yde-street-light text-body-s text-brown-1000">
            {isQuiz ? '간단한 상식 퀴즈 게임이에요' : '같은 짝을 가진 카드를 기억하고 맞추는 게임이에요'}
          </Text>
        </View>
        {isQuiz ? <QuizGame onComplete={onComplete} /> : <MemoryGame />}
      </View>
      {!isQuiz && <NextStepLink onPress={onComplete} />}
    </View>
  );
}
