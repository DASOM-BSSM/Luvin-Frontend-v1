import type { ConversationChoice } from '@/src/features/inferno/components/InfernoConversationScreen';
import type { InfernoChatMessage } from '@/src/features/inferno/types';

export const CATFISH_CONVERSATION_CHOICES: ConversationChoice[] = [
  { type: 'madeleine', label: '마들렌 반죽과의 대화' },
  { type: 'baguette', label: '바게트 반죽과의 대화' },
  { type: 'redbean', label: '팥빵 반죽과의 대화' },
];

export const CATFISH_CONVERSATION_MESSAGES: InfernoChatMessage[] = [
  { sender: '느긋한 녹은 버터', message: '안녕하세요 저는 메기 녹은 버터 입니다' },
  { sender: '유쾌한 마들렌 반죽', message: '안녕하세요 저는 유쾌한 마들렌 반죽이에용', mine: true },
  { sender: '느긋한 녹은 버터', message: '혹시 마들렌님은 여기서 썸 타고 있는 분 계세요?' },
];

export const GROUP_CONVERSATION_MESSAGES: InfernoChatMessage[] = [
  { sender: '따뜻한 바게트 반죽', message: '오늘은 분위기가 조금 달라진 것 같아요' },
  { sender: '쫀쫀한 소금빵 반죽', message: '저도 누구랑 더 이야기해야 할지 고민돼요', mine: true },
  { sender: '차가운 프레첼 반죽', message: '그럼 지금 제일 궁금한 사람부터 말해볼까요?' },
];

export const OVEN_CONVERSATION_MESSAGES: InfernoChatMessage[] = [
  { sender: '도도한 도넛 반죽', message: '천국도에 오니까 좀 더 솔직해져도 될 것 같아요' },
  { sender: '쫀쫀한 소금빵 반죽', message: '저도 오늘은 마음을 조금 말해보고 싶어요', mine: true },
  { sender: '도도한 도넛 반죽', message: '그럼 지금 제일 궁금한 건 저예요?' },
];

export const FINAL_CONVERSATION_MESSAGES: InfernoChatMessage[] = [
  { sender: '유쾌한 마들렌 반죽', message: '마지막이라 그런지 다들 표정이 달라요' },
  { sender: '쫀쫀한 소금빵 반죽', message: '이제 진짜 마음을 정해야겠네요', mine: true },
  { sender: '따뜻한 바게트 반죽', message: '후회하지 않게 마지막 대화를 해봐요' },
];
