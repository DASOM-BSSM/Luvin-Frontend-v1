import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { Line, Polygon } from 'react-native-svg';

export interface DiagramPoint {
  x: number;
  y: number;
}

interface Episode2AnimatedVoteArrowProps {
  color: string;
  delayMs: number;
  from: DiagramPoint;
  to: DiagramPoint;
}

const ARROW_ANIMATION_MS = 520;

function getArrowHeadPoints(from: DiagramPoint, to: DiagramPoint): string {
  const size = 8;
  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  const leftAngle = angle - Math.PI / 7;
  const rightAngle = angle + Math.PI / 7;
  const left = {
    x: to.x - size * Math.cos(leftAngle),
    y: to.y - size * Math.sin(leftAngle),
  };
  const right = {
    x: to.x - size * Math.cos(rightAngle),
    y: to.y - size * Math.sin(rightAngle),
  };

  return `${to.x},${to.y} ${left.x},${left.y} ${right.x},${right.y}`;
}

function getAnimatedPoint(from: DiagramPoint, to: DiagramPoint, progress: number): DiagramPoint {
  return {
    x: from.x + (to.x - from.x) * progress,
    y: from.y + (to.y - from.y) * progress,
  };
}

export default function Episode2AnimatedVoteArrow({
  color,
  delayMs,
  from,
  to,
}: Episode2AnimatedVoteArrowProps) {
  const progressValue = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0);
  const currentPoint = getAnimatedPoint(from, to, progress);
  const shouldShowArrowHead = progress > 0.08;

  useEffect(() => {
    const listenerId = progressValue.addListener(({ value }) => {
      setProgress(value);
    });

    progressValue.setValue(0);
    Animated.timing(progressValue, {
      toValue: 1,
      duration: ARROW_ANIMATION_MS,
      delay: delayMs,
      useNativeDriver: false,
    }).start();

    return () => {
      progressValue.removeListener(listenerId);
      progressValue.stopAnimation();
    };
  }, [delayMs, progressValue]);

  return (
    <>
      <Line
        x1={from.x}
        y1={from.y}
        x2={currentPoint.x}
        y2={currentPoint.y}
        stroke={color}
        strokeWidth={2}
      />
      {shouldShowArrowHead && (
        <Polygon points={getArrowHeadPoints(from, currentPoint)} fill={color} />
      )}
    </>
  );
}
