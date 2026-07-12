import { cssInterop } from 'nativewind';
import Svg, { Path } from 'react-native-svg';

const InteropPath = cssInterop(Path, {
  className: {
    target: 'style' as unknown as true,
    nativeStyleToProp: { fill: true },
  },
});

interface HomeNavIconProps {
  className?: string;
  size?: number;
}

export default function HomeNavIcon({ className = 'fill-brown-300', size = 24 }: HomeNavIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <InteropPath d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" className={className} />
    </Svg>
  );
}
