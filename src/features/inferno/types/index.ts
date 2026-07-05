export type ChatRoom = 'oven' | 'trolley';
export type ChatSender = 'people' | 'me';
export type ChatStatus = 'before' | 'now';

export interface EpisodeConfig {
  number: number;
  /** Shown inside the dashed REC thumbnail, e.g. "러빈지옥에 오신걸 환영해요" */
  thumbnailTitle: string;
  /** Quote lines shown top-to-bottom next to the start button. */
  quoteLines: string[];
  startButtonLabel: string;
  /** Stacked avatar comment-bubble messages shown after start, top-to-bottom. Only ep3/ep4 have one in scope. */
  hostExplainMessages?: string[];
  /** Lines shown on the final step, above the "에피소드 끝내기" button. */
  endNoticeLines: string[];
}
