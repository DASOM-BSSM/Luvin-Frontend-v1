import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';
import { View } from 'react-native';

import type { BreadTypeId } from '@/src/shared/types/bread';

cssInterop(Image, { className: 'style' });

const BAKED_IMAGES: Record<BreadTypeId, number> = {
  cream: require('@/src/assets/images/baked_cream.png'),
  redbean: require('@/src/assets/images/baked_redbeen.png'),
  salt: require('@/src/assets/images/baked_salt.png'),
  pretzel: require('@/src/assets/images/baked_pretzel.png'),
  donut: require('@/src/assets/images/baked_donut.png'),
  baguette: require('@/src/assets/images/baked_baguette.png'),
  madeleine: require('@/src/assets/images/baked_madeleine.png'),
  castella: require('@/src/assets/images/baked_castella.png'),
};

const DOUGH_IMAGES: Record<BreadTypeId, number> = {
  cream: require('@/src/assets/images/dough_cream.png'),
  redbean: require('@/src/assets/images/dough_redbean.png'),
  salt: require('@/src/assets/images/dough_salt.png'),
  pretzel: require('@/src/assets/images/dough_pretzel.png'),
  donut: require('@/src/assets/images/dough_donut.png'),
  baguette: require('@/src/assets/images/dough_baguette.png'),
  madeleine: require('@/src/assets/images/dough_madeleine.png'),
  castella: require('@/src/assets/images/dough_castella.png'),
};

interface BreadCharacterProps {
  type: BreadTypeId;
  variant?: 'baked' | 'dough';
  className?: string;
}

export default function BreadCharacter({
  type,
  variant = 'baked',
  className = 'w-20 h-20',
}: BreadCharacterProps) {
  const source = variant === 'dough' ? DOUGH_IMAGES[type] : BAKED_IMAGES[type];

  return (
    <View className={className}>
      <Image source={source} contentFit="contain" className="w-full h-full" />
    </View>
  );
}
