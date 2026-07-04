export const BREAD_ADJECTIVES = [
  '차가운',
  '따뜻한',
  '똑똑한',
  '조용한',
  '다정한',
  '진지한',
  '성숙한',
  '유쾌한',
  '귀여운',
  '도도한',
  '발랄한',
  '느긋한',
  '꼼꼼한',
  '섬세한',
  '솔직한',
  '엉뚱한',
  '털털한',
  '세련된',
  '쫀쫀한',
] as const;

export function pickRandomBreadAdjective(): string {
  return BREAD_ADJECTIVES[Math.floor(Math.random() * BREAD_ADJECTIVES.length)];
}
