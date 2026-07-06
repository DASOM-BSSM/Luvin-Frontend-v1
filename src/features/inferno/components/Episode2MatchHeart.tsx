import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { G, Path } from 'react-native-svg';

import type { DiagramPoint } from '@/src/features/inferno/components/Episode2AnimatedVoteArrow';

interface Episode2MatchHeartProps {
  delayMs: number;
  from: DiagramPoint;
  to: DiagramPoint;
}

const HEART_ANIMATION_MS = 260;

function HeartMark() {
  return (
    <Path
      d="M12 21.4 10.55 20.08C5.4 15.42 2 12.34 2 8.55C2 5.47 4.42 3.05 7.5 3.05C9.24 3.05 10.91 3.86 12 5.14C13.09 3.86 14.76 3.05 16.5 3.05C19.58 3.05 22 5.47 22 8.55C22 12.34 18.6 15.42 13.45 20.09L12 21.4Z"
      fill="#FF0030"
      scale={0.82}
    />
  );
}

export default function Episode2MatchHeart({ delayMs, from, to }: Episode2MatchHeartProps) {
  const progressValue = useRef(new Animated.Value(0)).current;
  const [opacity, setOpacity] = useState(0);
  const x = (from.x + to.x) / 2 - 10;
  const y = (from.y + to.y) / 2 - 24;

  useEffect(() => {
    const listenerId = progressValue.addListener(({ value }) => {
      setOpacity(value);
    });

    progressValue.setValue(0);
    Animated.timing(progressValue, {
      toValue: 1,
      duration: HEART_ANIMATION_MS,
      delay: delayMs,
      useNativeDriver: false,
    }).start();

    return () => {
      progressValue.removeListener(listenerId);
      progressValue.stopAnimation();
    };
  }, [delayMs, progressValue]);

  return (
    <G opacity={opacity} transform={`translate(${x} ${y})`}>
      <HeartMark />
    </G>
  );
}
