import { BREAD_TYPES, type BreadTypeId } from '@/src/shared/types/bread';

export interface CastMember {
  type: BreadTypeId;
  /** Random-adjective prefix fixed per cast member so it stays consistent across screens. */
  adjective: string;
  /** Bread type name, e.g. "소금빵" */
  name: string;
  /** First-person quote shown on the cast member's intro card. */
  quote: string;
  /** Trait hashtags shown under the quote. */
  hashtags: string[];
}

const HASHTAGS_BY_TYPE: Record<BreadTypeId, string[]> = {
  cream: ['감정 숨기는 척 하는데 좋아하면 티 남', '정이 많고 혼자 의미부여 많이 함', '안정적인 타입이랑 잘 맞음'],
  redbean: [
    '표현이 서툴지만 행동으로 챙김',
    '한번 마음을 주면 오래가고 안정감이 높은 편',
    '감정 기복이 심한 사람을 잘 잡아줌',
  ],
  salt: ['담백하고 표현이 과하지 않음', '처음엔 차가워 보이나 가까워질 수록 따뜻해짐', '질투가 많음'],
  pretzel: ['츤데레, 자존심이 셈', '관심있는데 툭툭 거림', '눈치가 빠른 사람과 잘 어울림'],
  donut: ['분위기 메이커, 외향적이고 사람을 좋아함', '외로움을 잘 느끼고 관심 받고 싶어함', '표현이 많은 사람과 잘 어울림'],
  baguette: [
    '경계심이 있고 마음을 쉽게 열지 않음',
    '자신만의 기준이 확고해서 연애를 시작하기 쉽지 않음',
    '마음이 급한 사람과 맞지 않음',
  ],
  madeleine: [
    '감정보다 현실을 먼저 보는 타입',
    '썸 오래 타는거 못함',
    '밀당 싫어하고 문제가 생기면 솔직하게 다 말하는 타입',
  ],
  castella: ['분위기에 영향을 많이 받고 거절을 잘 못함', '상대 감정에 흔들림', '맞춰주다가 지치고 다정한 사람을 좋아함'],
};

// Fixed per cast-member adjectives. salt/baguette/pretzel/donut/madeleine confirmed directly
// from the Figma copy ("쫀쫀한 소금빵", "따뜻한 바게트", "차가운 프레첼", "도도한 도넛", "유쾌한 마들렌");
// cream/redbean/castella are not shown in the Figma file and use reasonable picks from the same
// 지옥 (BREAD_ADJECTIVES) list.
const ADJECTIVE_BY_TYPE: Record<BreadTypeId, string> = {
  cream: '다정한',
  redbean: '성숙한',
  salt: '쫀쫀한',
  pretzel: '차가운',
  donut: '도도한',
  baguette: '따뜻한',
  madeleine: '유쾌한',
  castella: '털털한',
};

export const CAST_MEMBERS: CastMember[] = BREAD_TYPES.map((breadType) => ({
  type: breadType.id,
  adjective: ADJECTIVE_BY_TYPE[breadType.id],
  name: breadType.name,
  quote: breadType.description,
  hashtags: HASHTAGS_BY_TYPE[breadType.id],
}));

export function getCastMember(type: BreadTypeId): CastMember {
  const member = CAST_MEMBERS.find((castMember) => castMember.type === type);

  if (!member) {
    throw new Error(`Unknown bread type: ${type}`);
  }

  return member;
}

/** Picks `count` distinct cast members at random (Fisher-Yates shuffle). */
export function pickRandomCastMembers(count: number): CastMember[] {
  const shuffled = [...CAST_MEMBERS];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
