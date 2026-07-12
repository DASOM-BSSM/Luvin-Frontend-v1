import { Text, View } from 'react-native';

import type { RankedBreadType } from '@/src/features/result/types';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';

interface BreadTypeResultCardProps {
  rank: number;
  result: RankedBreadType;
}

function formatSimilarity(similarity: number): string {
  return `${Math.round(similarity * 100)}%`;
}

export default function BreadTypeResultCard({ rank, result }: BreadTypeResultCardProps) {
  return (
    <View className="w-full flex-row items-center gap-4 rounded-xl bg-default-card px-6 py-4">
      <BreadCharacter type={result.bread.id} className="h-16 w-20 shrink-0" />
      <View className="flex-1 gap-1">
        <Text className="font-yde-street-light text-body-xs text-brown-500">유사도 {rank}위</Text>
        <Text className="font-yde-street-bold text-heading-h4 text-text-primary">{result.bread.name}</Text>
        <Text className="font-yde-street-light text-body-xs text-text-muted">{result.bread.description}</Text>
      </View>
      <Text className="font-yde-street-bold text-heading-h4 text-brown-500">
        {formatSimilarity(result.similarity)}
      </Text>
    </View>
  );
}
