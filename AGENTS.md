# CLAUDE.md

Luvin is a mobile-based bread-themed AI dating simulation app. The core concept is **"Love is all about timing"** — users' romantic tendencies are analyzed and expressed as bread types, and an AI avatar ("분신") that mirrors the user's personality enters a dating simulation inspired by Netflix's *Single's Inferno*. The entire service experience is expressed through a bread-baking metaphor.

---

# MCP Servers

## Figma Dev Mode MCP Rules

- The Figma Dev Mode MCP Server provides an assets endpoint which can serve image and SVG assets
- IMPORTANT: If the Figma Dev Mode MCP Server returns a localhost source for an image or an SVG, use that image or SVG source directly
- IMPORTANT: DO NOT import/add new icon packages — all assets should come from the Figma payload
- IMPORTANT: Do NOT use or create placeholders if a localhost source is provided

---

# Tech Spec

Please check dependencies in `./package.json`.

- **Framework**: React Native, Expo, TypeScript
- **State Management**: Zustand
- **Styling**: NativeWind (Tailwind CSS v3)
- **API & Async State**: TanStack Query + Axios
- **Animation**: Motion
- **Auth**: Google OAuth only (no separate sign-up flow)
- **Package Manager**: pnpm

---

# Design System

## Colors

| Token | Value | Usage |
|---|---|---|
| Background | `#16130F` | App-wide dark background (inside-of-an-oven feel) |
| Surface | `#1E1A15` | Cards, panels |
| Text Primary | `#F0EAE0` | Main text |
| Text Secondary | `#9C8E7E` | Subtext, labels |
| Accent (Crust) | `#C8922A` | CTA, active states, temperature gauge |
| Danger (Burned) | `#C4402A` | Warnings, burned state |
| Cold (Raw) | `#6E8A96` | Unready state, cold relationships |

## Temperature Spectrum (Core UI Language)

All relationship states are expressed through temperature:

```
RAW ──── MILD ──── WARM ──── HOT ──── BURNED
덜 익음   미지근   적정온도   과열직전   타버림
```

## Typography

| Role | Font | Usage |
|---|---|---|
| Display / Headline | `Yde Street Bold` | Brand name, page titles, onboarding copy |
| Body | `Pretendard Regular/Medium` | General text, descriptions |
| Data / System | `DM Mono Regular` | Temperature values, timers, status codes |

## Visual Style

- Dark background (#16130F) — oven interior feel, not a cozy bakery
- Bread characters exist but are not the main focus — the **system** is the main focus
- Temperature gauge is the most important recurring UI component
- Left-border status cards for quick state recognition
- Asymmetric grid layout — large numbers, small labels
- Tone: analytical, restrained warmth — NOT cute bakery, NOT pink romance app

---

# UX Vocabulary

Luvin uses bread-baking metaphors for all UX copy. Always follow this vocabulary:

| General Term | Luvin Term |
|---|---|
| Sign up / Start | 반죽 시작하기 |
| Survey | 반죽 만들기 |
| Survey result | 굽기 결과 |
| My profile / status | 내 반죽 정보 |
| AI avatar creation | 분신 굽기 |
| Matching start | 오븐 투입 |
| In progress | 굽는 중 |
| Completed | 완성 |
| Error / Failed | 타버렸습니다 |
| Waiting | 예열 중 |
| Notification | 오븐 신호 |
| Like / Empathy | 온도 올리기 |
| Comment | 메모 |
| Community | 베이킹 노트 |
| Good compatibility | 같은 온도에서 굽힙니다 |
| Bad compatibility | 온도가 맞지 않습니다 |
| Overheat (strong emotion) | 과열 감지됨 |
| Relationship cooling | 식어가는 중 |
| Single's Inferno feature | 러빈지옥 (Luvin 지옥) |

---

# Service Structure

## 1. Onboarding

- Dark background with oven illustration
- Copy: `"사랑은 타이밍이에요 / 너무 빠르면 덜 익고, 너무 늦으면 타버리니깐요"`
- Single CTA button: `"오븐 예열 시작하기"` → triggers Google OAuth
- No separate sign-up screen — first Google login automatically creates account
- After login: new users → survey / existing users → home

## 2. Main (Home)

**Before survey:**
- Headline: `"타이밍을 놓치기 전에,"`
- Subheadline: `"당신의 온도에 맞는 빵을 만나 서로의 가장 좋은 모습으로 익어가요"`
- CTA: survey entry button

**After survey:**
- My dough status card with live temperature gauge
- Today's balance game question
- Bread type trend ranking (horizontal scroll)
- 베이킹 노트 preview

## 3. Survey (반죽 만들기, 20 Questions)

- Format: A / B / C choice (not Likert scale)
- Measures 13 psychological variables across 6 core + 7 behavioral dimensions:
  - **Core**: 애정표현성, 관계불안도, 관계회피성, 감정동조성, 관계주도성, 현실우선성
  - **Behavioral**: 확신요구도, 질투반응성, 관계에너지의존도, 감정억제성, 갈등직면성, 관계속도감, 관심표현빈도
- Scoring: starts at 50 for each variable, each answer adds/subtracts points
- Result mapping: Euclidean distance in 13-dimensional space → nearest bread type

## 4. Survey Result (굽기 결과)

- Bread type card with character illustration
- Random adjective prefix (3 Korean characters) + bread name
  - Example: `"쫀쫀한 소금빵"`, `"차가운 바게트"`, `"발랄한 도넛"`
- Radar chart of 6 core variable scores
- Compatible/incompatible bread types
- Share button + CTA to create AI avatar

## 5. Bread Types (8 Types)

| Bread | One-line Description |
|---|---|
| 슈크림빵 | Tries to hide emotions but feelings show anyway |
| 팥빵 | Bad at expressing feelings but loyal and lasting |
| 소금빵 | Cold and indifferent but keeps coming to mind |
| 프레첼 | Has feelings but expresses them in a twisted way |
| 도넛 | Always looks bright but feels hollow inside |
| 바게트 | Firm and slow to open up |
| 마들렌 | Small but clear and brutally honest |
| 카스테라 | Accommodates everyone until exhausted |

## 6. Luvin 지옥 (러빈지옥)

Parody of Netflix's *Single's Inferno*, runs in **landscape mode**.

**Spaces:**
- 지옥도: Steel bread trolley — where bread characters wait
- 천국도: Oven — where matched couples go for 1:1 conversation

**Episode Flow:**
1. First impression vote
2. Vote result reveal → matched couple enters 천국도 (oven)
3. 1:1 deep conversation in oven

**(Repeating loop, episodes 4–7):**

4. Remaining breads play mini-games in 지옥도
   - Missions: 버터 구해오기 / 이스트 구해오기 / 밀가루 얻기 / 설탕 구해오기 / 계란 구하기
5. Couple returns → 메기 (new contestant: male + female) enters
6. Send a note to who you want to go to 천국도 with
7. Note reveal → matching result → matched couple enters oven

**Story elements:** Flirting, jealousy, conflict, love triangles, arguments, reconciliation — generated by LLM based on each bread's personality profile.

**Temperature relationship map:** All 6 participants shown with relationship lines colored by temperature (Cold/Warm/Hot).

## 7. AI Avatar (분신)

- State-based UI: before creation / waiting / active in 러빈지옥
- Oven status visualization with live temperature gauge
- Event feed: LLM-generated episode snippets
- Modes: 1:1 matching or 솔로지옥 (group format)

## 8. 베이킹 노트 (Anonymous Community)

- Anonymous identity = bread type (e.g., `소금빵 [● WARM 68°]`)
- Tabs: 전체 / 고민 / 관찰
- Reactions: 온도 올리기 (like) + 메모 (comment)

## Bottom Navigation (4 Tabs)

| Tab | Icon | Label |
|---|---|---|
| Home | ◎ | 홈 |
| 러빈지옥 | ⊙ | 러빈지옥 |
| AI 분신 | ≋ | 분신 |
| 베이킹 노트 | ✎ | 노트 |

- Tab bar hides on scroll, reappears when scroll stops or moves up
- Icons only — no labels displayed

---

# Directory Architecture

```
luvin-frontend-v1/
├── app/                          # Expo Router routes
│   ├── _layout.tsx
│   └── (tabs)/
│       ├── _layout.tsx
│       └── index.tsx
│
├── src/
│   ├── assets/
│   │   ├── fonts/                # Yde Street Bold, DM Mono, Pretendard
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── constants/
│   │   ├── colors.ts             # Design token colors
│   │   └── env.ts
│   │
│   ├── features/                 # Feature-based modules
│   │   ├── auth/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── store/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   ├── survey/
│   │   ├── result/
│   │   ├── inferno/              # 러빈지옥
│   │   ├── avatar/               # AI 분신
│   │   └── community/            # 베이킹 노트
│   │
│   ├── providers/
│   │   ├── query-provider.tsx
│   │   └── theme-provider.tsx
│   │
│   ├── services/
│   │   ├── api.ts
│   │   └── query-client.ts
│   │
│   └── shared/
│       ├── components/
│       ├── hooks/
│       ├── lib/utils.ts
│       ├── store/auth.store.ts
│       ├── styles/global.css
│       ├── types/
│       ├── ui/                   # Temperature gauge, status tag, etc.
│       └── utils/
│
├── CLAUDE.md
├── app.json
├── package.json
└── tsconfig.json
```

---

# Implementation Rules

- Each page is managed via `[pageName]` directory in `src/app/`
- Declare model and API types before implementing any page — check Figma design to determine necessary data
- Frequently reused components (buttons, inputs, status tags, temperature gauge) go in `src/shared/ui/` as flexible shared components
- All copy and UX text must follow Luvin UX vocabulary (bread-baking metaphors)
- Temperature gauge is a core shared component — implement it in `src/shared/ui/` first

---

# Avoid Patterns

- Do not use `any` type. Write `[feature]/types.ts` and export proper interfaces
- Avoid `margin`/`padding` styling — use `gap` or empty `h-{}` divs instead
- If a component file exceeds 150 lines, split hooks or sub-components into separate modules
- Do not use `React.[module]` pattern — import directly: `import { useState } from 'react'`
- Do not use inline functions — create named handler functions: `handle{Target}{Event}` (e.g., `handleCTAButtonPress`, `handleSurveyAnswerSelect`)
- Do not use inline styles
- Do not use `relative`/`absolute` layout — use flex and grid Tailwind CSS instead
- For assets: copy SVG code from Figma, convert to SVG component — do not create custom asset files
- Do not implement your own icons — all assets come from Figma

---

# MCP Configuration Notes

- Figma MCP package: `figma-developer-mcp` (NOT `@figma/mcp` — does not exist)
- Required flag: `--stdio` (default is HTTP mode, incompatible with Claude Code)
- Claude Code config location: `~/.claude.json` (NOT Claude Desktop config)
- Figma API token expires every 90 days — check expiration before use
- When querying Figma designs: specify `fileKey` and `node-id` separately for reliability