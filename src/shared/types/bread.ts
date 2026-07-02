export type BreadTypeId =
  | 'cream'
  | 'redbean'
  | 'salt'
  | 'pretzel'
  | 'donut'
  | 'baguette'
  | 'madeleine'
  | 'castella';

export interface BreadTypeInfo {
  id: BreadTypeId;
  name: string;
  description: string;
}

export const BREAD_TYPES: BreadTypeInfo[] = [
  { id: 'cream', name: '슈크림빵', description: '겉은 멀쩡한데 속이 쉽게 새어 나오는 사람' },
  { id: 'redbean', name: '팥빵', description: '투박한데 사랑이 오래가는 사람' },
  { id: 'salt', name: '소금빵', description: '차갑고 무심하지만 자꾸 생각나는 타입' },
  { id: 'pretzel', name: '프레첼', description: '마음은 있는데 표현이 꼬인 사람' },
  { id: 'donut', name: '도넛', description: '항상 밝아보이는데 가운데가 비어있는 사람' },
  { id: 'baguette', name: '바게트', description: '단단하고 느리게 가까워지는 사람' },
  { id: 'madeleine', name: '마들렌', description: '작지만 과하게 화려하지 않고 선명한 사람' },
  { id: 'castella', name: '카스테라', description: '푹신해서 쉽게 눌리는 사람' },
];
