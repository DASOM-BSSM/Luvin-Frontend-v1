# CLAUDE.md

Luvin is a mobile-based bread-themed dating/matching app. The core concept is "Love is all about timing" — users are metaphorized as "dough," and doughs with matching temperatures (timing) meet to complete a bread together. The entire matching service is expressed through this baking metaphor.

# MCP Servers

## Figma Dev Mode MCP Rules

- The Figma Dev Mode MCP Server provides an assets endpoint which can serve image and SVG assets
- IMPORTANT: If the Figma Dev Mode MCP Server returns a localhost source for an image or an SVG, use that image or SVG source directly
- IMPORTANT: DO NOT import/add new icon packages, all the assets should be in the Figma payload
- IMPORTANT: do NOT use or create placeholders if a localhost source is provided

# Tech Spec

Please check dependencies in ./package.json file.

- **Development**: React Native, TypeScript, Expo, Zustand
- **Styling**: Tailwind CSS
- **API Request**: Tanstack Query
- **Animation**: motion

# Design System

## Colors

- **Background**: Beige / cream tone base
- **Point Colors**: Warm orange, brown
- **Mood**: Friendly, cute, warm

## Typography

- **Brand Font**: Yde Street Bold (headings, brand elements)

## Visual Style

- Rounded bread character illustrations
- Cozy and cute overall mood
- Temperature spectrum as core UI language: Raw / Mild / Warm / Hot / Burned

## Language & UX Vocabulary

Luvin uses bread-baking metaphors for all UX copy. Always follow this vocabulary:

| General Term | Luvin Term   |
| ------------ | ------------ |
| Matching     | 오븐투입     |
| Notification | 오븐 신호    |
| Survey       | 반죽 만들기  |
| Result       | 굽기 결과    |
| My status    | 내 반죽 상태 |

# Service Structure

## 1. Onboarding

- Cute bread character illustrations (croissant, pretzel, donut, etc.)
- Copy: "사랑은 타이밍이에요 / 너무 빠르면 덜 익고, 너무 늦으면 타버리니깐요"
- Google OAuth login

## 2. Main (Home)

- **Before survey**: "타이밍을 놓치기 전에" headline + survey CTA
- **After survey**: My dough status card (e.g. 0℃)
- **Common**: Today's balance game, Luvin's Inferno episode preview

## 3. Survey (반죽 만들기, 20 questions)

Measures romantic tendency variables:

- 애정표현성, 관계불안도, 관계회피성, 감정억압, 확신요구도, 질투반응성, 갈등직면성 등

## 4. Survey Result

- Bread type result with random adjective prefix (e.g. 차가운/다정한/엉뚱한)
- Example: "쫀쫀한 소금빵 반죽"

## 5. Luvin's Inferno (러빈지옥)

- Parody of Netflix "Single's Inferno"
- Visual metaphor: starts at 지옥도 (bread trolley) → moves to 천국도 (oven) when matched
- Episode structure (ep.1~7): 대화하기 → 투표결과/매칭 → 미니게임 → 투표
- Episodes 5~7 share the same UI as 1~4

## 6. AI Avatar Chat

- State-based UI: before joining / waiting / participating in Luvin's Inferno
- Chat with AI double (분신)

## 7. Mini Games

- Bread-themed + general knowledge quiz modules
- Expandable game slot structure

## Bottom Navigation

홈 / 러빈지옥 / 매칭(팔레트) / 채팅 — 4 tabs

# Directory Architecture

luvin-frontend-v1/
├── app/ # Expo Router 라우트
│ ├── \_layout.tsx
│ └── (tabs)/
│ ├── \_layout.tsx
│ └── index.tsx
│
├── src/
│ ├── assets/ # 폰트, 아이콘, 이미지 (현재 비어있음)
│ │ ├── fonts/
│ │ ├── icons/
│ │ └── images/
│ │
│ ├── constants/
│ │ ├── colors.ts
│ │ └── env.ts
│ │
│ ├── features/ # 기능별 모듈
│ │ └── auth/
│ │ ├── api/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── store/
│ │ ├── types/
│ │ └── utils/
│ │
│ ├── providers/
│ │ ├── query-provider.tsx
│ │ └── theme-provider.tsx
│ │
│ ├── services/
│ │ ├── api.ts
│ │ └── query-client.ts
│ │
│ └── shared/ # 공통 모듈
│ ├── components/
│ ├── hooks/
│ ├── lib/utils.ts
│ ├── store/auth.store.ts
│ ├── styles/global.css
│ ├── types/
│ ├── ui/
│ └── utils/
│
├── app.json
├── eslint.config.js
├── package.json
├── tsconfig.json
└── README.md

# Implement

- Each page is managed via [pageName] directory in `src/app`.
- If you need to implement some page, follow Directory Architecture rules.
- You should declare model and api when you need to implement some page. See the Figma design and judge what data is necessary.
- If you think it is a frequently used component, such as a button or input, please implement it flexibly in shared so that the component can be commonly used.
- All copy and UX text must follow the Luvin UX vocabulary (bread-baking metaphors).

# Avoid Pattern

- Do not use `any` type. If you need some interface or type, write `[feature page name]/types.ts` and export it.
- You can use gap or empty `h-{} div` instead of margin and padding. Please avoid margin/padding styling pattern as much as you can.
- If a component file has more than 150 lines of code, please separate the hooks or components into modules.
- Do not use `React.[module]` pattern. Please just import and use it.
- Do not use inline function. Please make a handler function and use it. You can name functions with this rule: `'handle'{target}{eventName}` e.g. `handleCTAButtonClick`, `handleAgeInputChange`, etc.
- Do not use inline style CSS.
- If you need assets, copy as SVG code in Figma. Do not implement your own asset file — just use SVG and convert to SVG component.
- Please avoid layout with `relative`, `absolute`. Use flex and grid Tailwind CSS keywords instead.
