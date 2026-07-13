import type { EpisodeConfig } from "@/src/features/inferno/types";

export const EPISODE_CONFIGS: EpisodeConfig[] = [
  {
    number: 1,
    thumbnailTitle: "러빈지옥에 오신걸 환영해요",
    hostExplainMessages: [
      "“안녕하세요 전 러빈지옥 패널이자\n진행을 맡고있는 다솜이에요!”",
      "“앞으로 러빈지옥은 제가 진행할게요!!”",
    ],
    quoteLines: [
      '"모든 빵들의 처음은 반죽이었어요',
      "어떻게 구워지느냐에 따라 맛도, 모양도 달라지죠.",
      "반죽이 끝까지 잘 구워질 수 있도록 지켜봐주세요.",
      "지금 그 첫번째 에피소드가 시작됩니다!”",
    ],
    startButtonLabel: "에피소드 1 시작하기",
    endNoticeLines: [
      "다음 에피소드가 시작되기 전까지",
      "가장 마음에 드는 반죽에게 마음을 보내주세요.",
      "다음 에피소드에서는 투표 결과를 알려드릴게요!",
    ],
  },
  {
    number: 2,
    thumbnailTitle: "첫인상 투표 결과를 알려드릴게요",
    hostExplainMessages: ["“지난 에피소드 이후 진행한\n첫인상 투표 결과를 알려드릴게요”"],
    quoteLines: [
      '"처음 만난 순간,',
      "반죽의 온도가 조금씩 달라지기 시작했어요.",
      "아직 아무것도 확인되지 않은 이 순간",
      "당신의 눈에는 어떤 반죽이 먼저 들어오나요?”",
    ],
    startButtonLabel: "에피소드 2 시작하기",
    endNoticeLines: ["다음 에피소드를 기대해주세요!"],
  },
  {
    number: 3,
    thumbnailTitle: "녹은 버터의 등장을 환영해주세요",
    quoteLines: [
      '"익숙해진 온도 사이로',
      "새로운 향이 천천히 스며들기 시작했어요.",
      "러빈지옥의 흐름을 바꿀 메기가",
      "지금 문을 두드립니다.”",
    ],
    startButtonLabel: "에피소드 3 시작하기",
    hostExplainMessages: [
      '"지난 에피소드에서 천국도에 갔던\n반죽들이 다시 지옥도로 돌아왔어요."',
      '"반죽들이 친해지기 시작한 지금,\n러빈지옥의 흐름을 바꿔줄 메기를 환영해주세요!"',
    ],
    endNoticeLines: ["다음 에피소드를 기대해주세요!"],
  },
  {
    number: 4,
    thumbnailTitle: "게임에 이겨서 사랑을 쟁취하세요",
    quoteLines: [
      '"사랑은 마음만으로 굽히지 않아요.',
      "때로는 타이밍을 잡는 손끝도 필요하죠.",
      "오늘의 게임은 누군가에게",
      "천국도에 갈 기회를 줄 거예요.”",
    ],
    startButtonLabel: "에피소드 4 시작하기",
    hostExplainMessages: [
      '"지난 에피소드에서 여성 출연자들 모두\n녹은 버터와 1:1 대화를 진행했어요."',
      '"이제 여러분이 미니게임에 직접 참여해서\n천국도에 같이 가고 싶은 반죽을 골라요."',
    ],
    endNoticeLines: ["다음 에피소드를 기대해주세요!"],
  },
  {
    number: 5,
    thumbnailTitle: "모든 반죽과 마음을 확인해요",
    quoteLines: [
      '"대화가 길어질수록',
      "반죽의 속마음은 조금씩 부풀어 올라요.",
      "이제 모두의 온도를 마주하고",
      "다음 선택을 기다릴 시간입니다.”",
    ],
    startButtonLabel: "에피소드 5 시작하기",
    hostExplainMessages: [
      '"오늘은 모든 출연자들과 대화하며\n서로의 마음을 더 확인해볼게요."',
      '"대화가 끝나면 반죽들이 함께 가고 싶은 사람을\n조용히 선택하게 됩니다."',
    ],
    endNoticeLines: ["다음 에피소드를 기대해주세요!"],
  },
  {
    number: 6,
    thumbnailTitle: "다시 갈라지는 마음의 방향",
    quoteLines: [
      '"선택은 다시 결과가 되고',
      "결과는 또 다른 기회를 만들어요.",
      "매칭된 반죽과 남겨진 반죽에게",
      "각자의 시간이 주어집니다.”",
    ],
    startButtonLabel: "에피소드 6 시작하기",
    hostExplainMessages: [
      '"지난 선택의 결과로 새로운 매칭이 공개돼요."',
      '"매칭된 반죽들은 천국도로 향하고,\n남은 반죽들은 기회를 얻기 위해 게임을 진행해요."',
    ],
    endNoticeLines: ["다음 에피소드를 기대해주세요!"],
  },
  {
    number: 7,
    thumbnailTitle: "마지막 선택 전의 대화",
    quoteLines: [
      '"이제 남은 시간은 많지 않아요.',
      "처음의 호기심은 마음이 되었고",
      "마지막 대화는 선택을 향해",
      "조용히 구워지고 있습니다.”",
    ],
    startButtonLabel: "에피소드 7 시작하기",
    hostExplainMessages: [
      '"마지막으로 모든 출연자들과 대화할 시간이 주어져요."',
      '"최종 선택은 사용자가 아닌 AI 분신이 진행하게 됩니다."',
    ],
    endNoticeLines: ["최종 결과를 기대해주세요!"],
  },
];

export function getEpisodeConfig(episodeNumber: number): EpisodeConfig {
  const config = EPISODE_CONFIGS.find(episode => episode.number === episodeNumber);

  if (!config) {
    throw new Error(`Unknown episode number: ${episodeNumber}`);
  }

  return config;
}

export const MAX_EPISODE_NUMBER = EPISODE_CONFIGS.length;
