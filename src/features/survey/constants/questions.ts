import type { SurveyQuestion } from '@/src/features/survey/types';

export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 1,
    question: '좋아하는 사람이랑 가까워지고 싶을 때 나는?',
    options: [
      { id: 'A', label: '같이 할 수 있는 걸로 자리를 만든다', description: '기회는 내가 만드는 거지', adjustments: { relationship_initiative: 14, relationship_pace: 8, attention_frequency: 6 } },
      { id: 'B', label: '자연스럽게 천천히 가까워진다', description: '억지로 자리를 만드는 것보다 자연스러운 게 좋아', adjustments: { relationship_pace: -3, reality_priority: 4 } },
      { id: 'C', label: '상대가 먼저 다가와주길 기다린다', description: '절대 내가 먼저 못 가', adjustments: { relationship_initiative: -14, relationship_anxiety: 5, relationship_pace: -6 } },
    ],
  },
  {
    id: 2,
    question: '사귀기 전, 좋아하는 감정을 상대가 눈치챘으면 할 때 나는?',
    options: [
      { id: 'A', label: '직접 말하거나 확실하게 티를 낸다', description: '돌려 말하다 타이밍 놓치는 거 싫어', adjustments: { affection_expressiveness: 15, conflict_confrontation: 5, relationship_initiative: 6 } },
      { id: 'B', label: '작은 행동으로 알아채주길 바란다', description: '눈치 있으면 알겠지', adjustments: { affection_expressiveness: 3, emotional_suppression: 4, reassurance_need: 5 } },
      { id: 'C', label: '들키지 않으려고 최대한 숨긴다', description: '알게 되면 어색해질 것 같아서', adjustments: { emotional_suppression: 15, affection_expressiveness: -11, relationship_anxiety: 6 } },
    ],
  },
  {
    id: 3,
    question: '답장이 평소보다 늦게 왔을 때 나는?',
    options: [
      { id: 'A', label: '별로 신경 안 쓴다, 바쁘겠지', description: '기다리는 게 딱히 힘들지 않아', adjustments: { relationship_anxiety: -12, reassurance_need: -8, reality_priority: 5 } },
      { id: 'B', label: '살짝 신경 쓰이지만 참는다', description: '신경 쓰이는데 티는 안 내려고', adjustments: { relationship_anxiety: 4, emotional_suppression: 7, reassurance_need: 4 } },
      { id: 'C', label: '이유가 뭔지 여러 가지 생각이 든다', description: '그 1시간이 왜 이렇게 길게 느껴지냐', adjustments: { relationship_anxiety: 14, reassurance_need: 10, jealousy_reactivity: 4 } },
    ],
  },
  {
    id: 4,
    question: '상대가 나한테 많이 의지하기 시작하면?',
    options: [
      { id: 'A', label: '가까워지는 것 같아서 좋다', description: '믿어준다는 게 느껴지잖아', adjustments: { relationship_dependency: 9, emotional_attunement: 7, relationship_avoidance: -8 } },
      { id: 'B', label: '좋긴 한데 가끔 벅차다', description: '좋은데 나도 숨 좀 쉬어야지', adjustments: { relationship_avoidance: 4, emotional_attunement: 3 } },
      { id: 'C', label: '조금 부담스럽고 거리를 두고 싶어진다', description: '가까워지는 게 설레기도 하고 무섭기도 하고', adjustments: { relationship_avoidance: 14, relationship_dependency: -8, emotional_suppression: 4 } },
    ],
  },
  {
    id: 5,
    question: '같이 있는 사람이 기분이 안 좋으면 나는?',
    options: [
      { id: 'A', label: '나도 같이 가라앉는다', description: '옆 사람 기분이 곧 내 기분인 사람 있잖아', adjustments: { emotional_attunement: 15, relationship_dependency: 5, relationship_anxiety: 3 } },
      { id: 'B', label: '신경은 쓰이지만 내 기분은 유지한다', description: '네 기분은 이해하는데 나까지 가라앉긴 싫어', adjustments: { emotional_attunement: 4, reality_priority: 5 } },
      { id: 'C', label: '내 기분은 따로 유지할 수 있다', description: '네 기분은 네 거, 내 기분은 내 거', adjustments: { emotional_attunement: -11, relationship_avoidance: 4, reality_priority: 7 } },
    ],
  },
  {
    id: 6,
    question: '사귀는 사람이랑 갈등이 생겼을 때 나는?',
    options: [
      { id: 'A', label: '바로 얘기해서 빨리 해결하고 싶다', description: '풀릴 때까지 기다리다 더 꼬이는 경우 있음', adjustments: { conflict_confrontation: 15, relationship_initiative: 6, emotional_suppression: -7 } },
      { id: 'B', label: '감정 좀 식으면 그때 차분하게 얘기한다', description: '흥분한 상태에서 말하면 더 커지더라', adjustments: { conflict_confrontation: 4, reality_priority: 8, emotional_suppression: 3 } },
      { id: 'C', label: '분위기가 자연스럽게 풀릴 때까지 기다린다', description: '말했다가 더 커질 것 같아서', adjustments: { conflict_confrontation: -14, emotional_suppression: 8, relationship_avoidance: 5 } },
    ],
  },
  {
    id: 7,
    question: '연락 패턴은?',
    options: [
      { id: 'A', label: '내가 먼저 연락하는 편이다', description: '먼저 연락하는 사람이 더 좋아하는 거 맞지?', adjustments: { relationship_initiative: 13, attention_frequency: 12, affection_expressiveness: 5 } },
      { id: 'B', label: '서로 비슷하게 주고받는 편이다', description: '밸런스가 맞아야 편하지', adjustments: { reality_priority: 5, attention_frequency: 2 } },
      { id: 'C', label: '오면 잘 받지만 먼저 하진 않는다', description: '연락 안 한다고 관심 없는 거 아니야', adjustments: { relationship_initiative: -11, attention_frequency: -8, emotional_suppression: 4 } },
    ],
  },
  {
    id: 8,
    question: '상대가 힘들어 보일 때 나는?',
    options: [
      { id: 'A', label: '먼저 말 걸고 바로 표현한다', description: '모른 척하는 게 더 어려워', adjustments: { emotional_attunement: 10, attention_frequency: 10, relationship_initiative: 6 } },
      { id: 'B', label: '티는 안 내지만 옆에서 더 잘 챙긴다', description: '말은 못 해도 행동으로 보여줄 수 있잖아', adjustments: { emotional_attunement: 6, emotional_suppression: 6, affection_expressiveness: 2 } },
      { id: 'C', label: '상대가 먼저 꺼내길 기다린다', description: '괜히 먼저 물어봤다가 부담 줄 것 같아서', adjustments: { relationship_initiative: -8, emotional_attunement: -3, relationship_avoidance: 5 } },
    ],
  },
  {
    id: 9,
    question: '상대가 다른 이성이랑 친하게 지내는 걸 알게 됐을 때?',
    options: [
      { id: 'A', label: '별로 개의치 않는다', description: '믿으면 되는 거지', adjustments: { jealousy_reactivity: -13, relationship_anxiety: -6, reassurance_need: -4 } },
      { id: 'B', label: '살짝 신경 쓰이지만 믿으려고 한다', description: '믿고 싶은데 자꾸 생각나', adjustments: { jealousy_reactivity: 4, relationship_anxiety: 4, emotional_suppression: 3 } },
      { id: 'C', label: '신경 쓰이고 괜히 예민해진다', description: '아무렇지 않은 척하는데 사실 엄청 신경 쓰임', adjustments: { jealousy_reactivity: 15, relationship_anxiety: 8, reassurance_need: 5 } },
    ],
  },
  {
    id: 10,
    question: '연애할 때 나는?',
    options: [
      { id: 'A', label: '일상을 많이 공유하고 같이 있는 시간이 많았으면 좋다', description: '같이 있는 시간이 쌓이는 게 좋아', adjustments: { relationship_dependency: 13, relationship_avoidance: -10, attention_frequency: 6 } },
      { id: 'B', label: '같이 있는 시간도 좋고 혼자 시간도 필요하다', description: '둘 다 있어야 균형이 맞지', adjustments: { reality_priority: 5, relationship_dependency: 2 } },
      { id: 'C', label: '각자 시간이 충분히 있어야 편하다', description: '붙어만 있으면 나 숨막혀', adjustments: { relationship_avoidance: 14, relationship_dependency: -12, attention_frequency: -4 } },
    ],
  },
  {
    id: 11,
    question: '분위기가 어색한 자리에 가면 나는?',
    options: [
      { id: 'A', label: '내가 분위기를 바꿔보려고 한다', description: '어색한 거 그냥 넘어가면 되지', adjustments: { relationship_initiative: 10, attention_frequency: 7, relationship_pace: 5 } },
      { id: 'B', label: '어색하지만 적당히 맞춰간다', description: '분위기 파악하면서 끼어드는 편', adjustments: { emotional_attunement: 5, reality_priority: 4 } },
      { id: 'C', label: '분위기에 맞게 나도 어색해진다', description: '어색함을 내가 왜 이렇게 못 견디냐', adjustments: { emotional_attunement: 8, relationship_anxiety: 6, relationship_initiative: -6 } },
    ],
  },
  {
    id: 12,
    question: '썸 탈 때 밀당에 대해서?',
    options: [
      { id: 'A', label: '솔직하게 표현하는 게 맞다고 생각한다', description: '밀당인지 관심 없는 건지 어떻게 알아', adjustments: { affection_expressiveness: 11, conflict_confrontation: 6, emotional_suppression: -5 } },
      { id: 'B', label: '적당한 밀당은 자연스러운 과정이다', description: '너무 쉽게 잡히면 설렘이 없잖아', adjustments: { relationship_anxiety: 3, relationship_pace: 2, emotional_suppression: 3 } },
      { id: 'C', label: '밀당을 즐기는 편이다', description: '당기고 밀고 하는 게 오히려 재미있어', adjustments: { emotional_suppression: 8, relationship_anxiety: 6, relationship_initiative: 4 } },
    ],
  },
  {
    id: 13,
    question: '사귀자는 말 없이 썸만 계속 이어지면?',
    options: [
      { id: 'A', label: '자연스럽게 흘러가면 된다고 생각한다', description: '굳이 확인 안 해도 느낌으로 알잖아', adjustments: { reassurance_need: -7, relationship_pace: -3, conflict_confrontation: -3 } },
      { id: 'B', label: '슬슬 확인하고 싶어진다', description: '이게 뭔지는 알아야 할 것 같아', adjustments: { reassurance_need: 7, relationship_anxiety: 5, conflict_confrontation: 4 } },
      { id: 'C', label: '빨리 관계를 정의하고 싶다', description: '썸인지 사귀는 건지 모르면 불편해', adjustments: { reassurance_need: 13, relationship_pace: 8, conflict_confrontation: 8 } },
    ],
  },
  {
    id: 14,
    question: '좋아하는 사람이 나 말고 다른 사람한테 잘해주는 걸 봤을 때?',
    options: [
      { id: 'A', label: '별로 신경 안 쓰인다', description: '다들 친한 거겠지', adjustments: { jealousy_reactivity: -12, relationship_anxiety: -5, emotional_suppression: -2 } },
      { id: 'B', label: '마음이 살짝 불편하지만 티는 안 낸다', description: '티 내면 쪼잔해 보일 것 같아서', adjustments: { jealousy_reactivity: 4, emotional_suppression: 8, relationship_anxiety: 3 } },
      { id: 'C', label: '모르게 신경 쓰이고 태도가 바뀐다', description: '나도 모르게 말수가 줄어들더라', adjustments: { jealousy_reactivity: 13, relationship_anxiety: 8, emotional_suppression: 5 } },
    ],
  },
  {
    id: 15,
    question: '연애할 때 상대에게 기대는 편인가요?',
    options: [
      { id: 'A', label: '독립적으로 각자 에너지를 채우는 편이다', description: '상대한테 기대는 게 불편해', adjustments: { relationship_dependency: -14, relationship_avoidance: 7, reality_priority: 4 } },
      { id: 'B', label: '가끔은 기대고 가끔은 혼자 해결한다', description: '상황에 따라 다른 것 같아', adjustments: { relationship_dependency: 2, emotional_attunement: 2 } },
      { id: 'C', label: '상대가 있어야 힘이 나는 편이다', description: '같이 있으면 에너지가 충전되는 느낌', adjustments: { relationship_dependency: 14, reassurance_need: 6, relationship_avoidance: -5 } },
    ],
  },
  {
    id: 16,
    question: '화가 났을 때 나는?',
    options: [
      { id: 'A', label: '바로 표현한다, 쌓아두는 게 더 싫다', description: '참다가 한 번에 터지면 더 힘들잖아', adjustments: { conflict_confrontation: 14, emotional_suppression: -12, affection_expressiveness: 4 } },
      { id: 'B', label: '어느 정도 참다가 적당한 타이밍에 말한다', description: '바로 말하면 감정적으로 보일 것 같아서', adjustments: { emotional_suppression: 4, conflict_confrontation: 5, reality_priority: 6 } },
      { id: 'C', label: '최대한 감추고 혼자 삭힌다', description: '말해봤자 달라지는 게 없을 것 같아', adjustments: { emotional_suppression: 15, conflict_confrontation: -11, relationship_avoidance: 5 } },
    ],
  },
  {
    id: 17,
    question: '상대방이 나를 서운하게 했을 때?',
    options: [
      { id: 'A', label: '바로 얘기한다, 모르면 바뀌지 않으니까', description: '말 안 하면 평생 몰라', adjustments: { conflict_confrontation: 13, relationship_initiative: 5, emotional_suppression: -6 } },
      { id: 'B', label: '한 번은 참고 두 번째면 말한다', description: '한 번은 그럴 수도 있다고 생각해', adjustments: { conflict_confrontation: 3, emotional_suppression: 5, reality_priority: 4 } },
      { id: 'C', label: '최대한 넘어가려고 한다', description: '괜히 얘기했다가 사이 어색해질 것 같아', adjustments: { conflict_confrontation: -13, emotional_suppression: 8, relationship_anxiety: 4 } },
    ],
  },
  {
    id: 18,
    question: '처음 만난 사람과 친해지는 속도는?',
    options: [
      { id: 'A', label: '빠른 편이다, 금방 편해진다', description: '처음부터 편하게 대하는 게 좋아', adjustments: { relationship_pace: 15, relationship_initiative: 6, relationship_avoidance: -6 } },
      { id: 'B', label: '보통이다, 몇 번 만나다 보면 편해진다', description: '자연스럽게 쌓이는 게 맞지', adjustments: { relationship_pace: 2, reality_priority: 4 } },
      { id: 'C', label: '느린 편이다, 마음 열기까지 시간이 걸린다', description: '쉽게 열었다가 상처받는 게 싫어', adjustments: { relationship_pace: -14, relationship_avoidance: 9, relationship_anxiety: 4 } },
    ],
  },
  {
    id: 19,
    question: '좋아하는 사람한테 연락하는 편은?',
    options: [
      { id: 'A', label: '생각날 때마다 자주 한다', description: '생각났다고 바로 연락하면 안 돼?', adjustments: { attention_frequency: 15, affection_expressiveness: 8, relationship_initiative: 6 } },
      { id: 'B', label: '하루에 한두 번 적당하게 한다', description: '너무 자주도 너무 없어도 부담이잖아', adjustments: { attention_frequency: 2, reality_priority: 5 } },
      { id: 'C', label: '연락은 잘 안 하지만 만나면 잘 챙긴다', description: '연락 횟수가 마음의 크기는 아니잖아', adjustments: { attention_frequency: -13, emotional_suppression: 4, affection_expressiveness: -3 } },
    ],
  },
  {
    id: 20,
    question: '혼자 있는 시간 vs 같이 있는 시간, 어느 쪽이 더 충전이 돼요?',
    options: [
      { id: 'A', label: '혼자 있을 때 훨씬 충전된다', description: '혼자 있어야 진짜 쉬는 느낌', adjustments: { relationship_dependency: -15, relationship_avoidance: 10, emotional_attunement: -3 } },
      { id: 'B', label: '둘 다 필요하다, 상황마다 다르다', description: '때로는 같이, 때로는 혼자', adjustments: { relationship_dependency: 1, reality_priority: 5 } },
      { id: 'C', label: '좋아하는 사람이랑 있을 때 충전된다', description: '같이 있으면 피곤해도 괜찮아', adjustments: { relationship_dependency: 15, relationship_avoidance: -9, attention_frequency: 5 } },
    ],
  },
];
