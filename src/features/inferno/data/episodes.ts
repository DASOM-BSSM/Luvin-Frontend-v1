import type { EpisodeConfig } from "@/src/features/inferno/types";

export const EPISODE_CONFIGS: EpisodeConfig[] = [
  {
    number: 1,
    thumbnailTitle: "러빈지옥에 오신걸 환영해요",
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
    quoteLines: ['"말 생각해'],
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
    quoteLines: ['"말 생각해'],
    startButtonLabel: "에피소드 4 시작하기",
    hostExplainMessages: [
      '"지난 에피소드에서 여성 출연자들 모두\n녹은 버터와 1:1 대화를 진행했어요."',
      '"이제 여러분이 미니게임에 직접 참여해서\n천국도에 같이 가고 싶은 반죽을 골라요."',
    ],
    endNoticeLines: ["다음 에피소드를 기대해주세요!"],
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
