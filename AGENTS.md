# AGENTS.md

Luvin is a mobile-based bread-themed AI dating simulation app. The core concept is **"Love is all about timing"** — users' romantic tendencies are analyzed and expressed as bread types, and an AI avatar ("분신") that mirrors the user's personality participates in a dating simulation inspired by Netflix's _Single's Inferno_.

---

> ## ALWAYS READ FIRST BEFORE STARTING ANY TASK
>
> 1. **Read the Directory Architecture section** in this file before writing any code
> 2. **Read the Figma design** before implementing any UI — do NOT assume or hardcode design values
> 3. **Check `package.json`** for exact dependency versions before installing anything

---

# 1. Platform Principles

- **Target platforms**: iOS and Android
- Ensure identical UX, interface, and behavior on both platforms
- Avoid platform-specific styles or logic that cause visual inconsistencies unless strictly necessary (e.g. SafeArea padding)

---

# 2. Tech Stack

> Always verify exact versions in `package.json` before use. Do not upgrade packages without confirmation.

| Category          | Library                               | Notes                            |
| ----------------- | ------------------------------------- | -------------------------------- |
| Framework         | `expo`                                | Check `package.json` for version |
| Routing           | `expo-router`                         | File-based routing under `app/`  |
| Runtime           | `react-native`, `typescript`, `react` | Check `package.json` for version |
| Styling           | `nativewind` (NativeWind v4)          | Tailwind CSS v3 compatible       |
| State Management  | `zustand`                             | Global state                     |
| API & Async State | `@tanstack/react-query` + `axios`     | Data fetching and caching        |
| Auth              | Google OAuth only                     | No separate sign-up flow         |

---

# 3. Package & Dependency Rules

- **Package manager: `npm`** — do NOT use `pnpm`, `yarn`, or `bun`
- Use the following command when adding new packages to ensure Expo SDK compatibility:
  ```bash
  npx expo install <package-name>
  ```
- Do not upgrade any package version without explicit confirmation from the user
- If a package is missing or version conflicts arise, report it and ask before resolving

---

# 4. Design System

> **All design values (colors, spacing, typography, border radius, etc.) must be read from Figma.**
> Do NOT hardcode or assume any design tokens.
>
> - Design tokens are stored in `tailwind.config.js`
> - If a token is missing in `tailwind.config.js`, read it from Figma and add it before using
> - **Figma File Key**: Do NOT hardcode anywhere. Ask the user for the file key before querying Figma.

## Figma MCP Rules

- Always read the Figma design before implementing any screen or component
- If the Figma MCP returns a localhost URL for an image or SVG, find the same asset from `src/assets/images`
- Do NOT add new icon packages — all icon assets come from Figma
- Do NOT create placeholder assets — use the actual Figma assets
- If Figma design is unavailable for a component, **ask before proceeding**

## Typography

Only two fonts are used in Luvin:

| Font               | Usage                                   |
| ------------------ | --------------------------------------- |
| `Yde Street Bold`  | Headlines, brand elements, display text |
| `Yde Street Light` | Body text, descriptions, subtext        |

Do NOT use any other font. All font usage details are defined in Figma.

---

# 5. Service Structure

## Onboarding

- Single CTA: `"나의 오븐 예열하기"` triggers Google OAuth
- No separate sign-up screen — first login auto-creates account
- After login: users go to home

## Main (Home)

**Before survey:** Headline + survey CTA

**After survey:** My dough status card, today's balance game, new Luvin 지옥 episode

## Survey (반죽 만들기, 20 Questions)

- Format: A / B / C choice
- Each answer adds/subtracts points

## Survey Result (반죽 만들기 결과)

- Bread type card + random 3-char Korean adjective prefix (e.g. `"쫀쫀한 소금빵"`)
- Radar chart of 6 core variables
- Compatible / incompatible bread types
- Share + CTA to create AI avatar

## Bread Types (8 Types)

| ID          | Name     | Description                                      |
| ----------- | -------- | ------------------------------------------------ |
| `cream`     | 슈크림빵 | Tries to hide emotions but feelings show anyway  |
| `redbean`   | 팥빵     | Bad at expressing feelings but loyal and lasting |
| `salt`      | 소금빵   | Cold and indifferent but keeps coming to mind    |
| `pretzel`   | 프레첼   | Has feelings but expresses them in a twisted way |
| `donut`     | 도넛     | Always looks bright but feels hollow inside      |
| `baguette`  | 바게트   | Firm and slow to open up                         |
| `madeleine` | 마들렌   | Small but clear and brutally honest              |
| `castella`  | 카스테라 | Accommodates everyone until exhausted            |

## Luvin 지옥 (러빈지옥)

- Runs in **landscape mode**
- 지옥도 (steel bread trolley / 발효실) is the waiting space
- 천국도 (oven) is where matched couples go for 1:1 conversation

**Episode Flow (8 Episodes):**

| Episode | Content                                                                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ep.1    | 출연자 소개 / 지옥·천국도 소개 (두 번째 솔로지옥 참여부턴 skip 가능) / 첫인상 투표 (사용자가 직접)                                      |
| ep.2    | 투표 결과, 매칭 공개 / 매칭된 애들 → 오븐(1:1 대화) / 안 된 애들 → 다같이 대화                                                          |
| ep.3    | 매칭된 애들이 오븐에서 → 빵 트롤리로 돌아옴 / 안 된 애들과 합쳐지면 메기(녹은버터) 등장 / 메기 소개 / 메기 + 이성 출연자들이랑 1:1 대화 |
| ep.4    | 사용자 참여형 게임 → 1위만 천국도에 같이 갈 출연자를 고를 수 있게 / 매칭된 애들끼리 오븐(1:1) / 안 된 애들 → 다같이 대화                |
| ep.5    | 모든 출연자들과 대화하기 (플러팅, 질투, 삼각관계) / 같이 가고 싶은 사람 투표 (사용자가 하면 안됨)                                       |
| ep.6    | 투표 결과, 매칭 공개 / 매칭된 애들 → 오븐(1:1) / 안 된 애들 → 사용자 참여형 미니게임 / 1등 = 천국도 갈 기회                             |
| ep.7    | 마지막으로 모든 출연자들과 대화하기 / 최종 투표 (사용자가 직접 하면 안됨 — AI가 진행)                                                   |
| ep.8    | 최종 투표 결과 공개 및 커플 공개                                                                                                        |

## AI Avatar (분신)

- States: before creation / waiting / active
- LLM-generated episode feed
- Mode: 솔로지옥

## 베이킹 노트 (Community)

> **Not implemented in v1 — design is not ready yet. Do NOT develop this feature until design is provided.**

- Anonymous: identity = bread type + temperature tag
- Tabs: 전체 / 고민 / 관찰
- Actions: 온도 올리기 (like) + 메모 (comment)

## Bottom Navigation (4 Tabs)

`홈` / `러빈지옥` / `분신` / `베이킹노트`

- Tab bar hides on scroll, reappears on stop or scroll up
- Icons only (no labels) — icon assets from Figma
- `베이킹노트` tab is visible in the tab bar but tapping it shows a "준비 중" coming soon screen — do NOT navigate to any actual feature screen

---

# 6. Directory Architecture

> **Read this section before writing any code for every single task.**
> Place files exactly as described. Do not create new top-level directories without confirmation.

```
luvin-frontend-v1/
├── app/                          # Expo Router routes (file-based)
│   ├── _layout.tsx               # Root layout
│   └── (tabs)/
│       ├── _layout.tsx           # Tab navigator layout
│       └── index.tsx             # Home tab
│
├── src/
│   ├── assets/
│   │   ├── fonts/                # Yde Street Bold, Yde Street Light
│   │   ├── icons/                # SVG icons from Figma only
│   │   └── images/               # Image assets from Figma only
│   │
│   ├── constants/
│   │
│   ├── features/                 # Feature-based modules
│   │   ├── auth/
│   │   │   ├── api/              # API calls
│   │   │   ├── components/       # Auth-specific components
│   │   │   ├── hooks/            # Auth hooks
│   │   │   ├── store/            # Zustand store
│   │   │   ├── types/            # TypeScript types
│   │   │   └── utils/
│   │   ├── survey/               # 반죽 만들기
│   │   ├── result/               # 굽기 결과
│   │   ├── inferno/              # 러빈지옥
│   │   ├── avatar/               # AI 분신
│   │   └── community/            # 베이킹 노트 (v1 미개발)
│   │
│   ├── providers/
│   │   ├── query-provider.tsx    # TanStack Query provider
│   │   └── theme-provider.tsx
│   │
│   ├── services/
│   │   ├── api.ts                # Axios instance and interceptors
│   │   └── query-client.ts       # TanStack Query client config
│   │
│   └── shared/
│       ├── components/           # Domain-specific shared components
│       ├── hooks/                # Common custom hooks
│       ├── lib/utils.ts          # Utility functions
│       ├── store/auth.store.ts   # Auth Zustand store
│       ├── styles/global.css     # Global styles
│       ├── types/                # Global TypeScript types
│       ├── ui/                   # Reusable domain-agnostic UI components
│       │                         # (Button, Input, TemperatureGauge, StatusTag, etc.)
│       └── utils/
│
├── CLAUDE.md
├── AGENTS.md
├── app.json
├── tailwind.config.js            # Contains design tokens
├── package.json
└── tsconfig.json
```

### Component Placement Rules

| Situation                                        | Location                             |
| ------------------------------------------------ | ------------------------------------ |
| Reusable across any domain (Button, Input, etc.) | `src/shared/ui/`                     |
| Used only in one feature                         | `src/features/<feature>/components/` |
| API calls for a feature                          | `src/features/<feature>/api/`        |
| Zustand store for a feature                      | `src/features/<feature>/store/`      |
| TypeScript types for a feature                   | `src/features/<feature>/types/`      |
| Common hooks                                     | `src/shared/hooks/`                  |
| Design tokens                                    | `tailwind.config.js`                 |

---

# 7. Component-First Development Rules

> **Read this before implementing any page.**

## Before developing any page, you MUST:

1. **Identify all reusable UI elements** that appear across multiple pages (buttons, inputs, cards, tags, gauges, etc.) and implement them as shared components in `src/shared/ui/` first
2. **Identify all image/illustration assets** used in the page and implement each as a dedicated component before use
3. **Check if the component already exists** in `src/shared/ui/` or `src/features/<feature>/components/` before creating a new one — never duplicate

## Image & Asset Components

- **Every image, illustration, and SVG asset must be implemented as a React component**
- Copy SVG code from Figma and wrap it as a component in `src/assets/icons/` or `src/shared/ui/`
- Do NOT use raw `<Image>` with a file path directly in a page — always wrap in a component
- Naming convention: `<BreadCharacter type="salt" />`, `<OvenIllustration state="baking" />`, etc.

## Component Checklist (run through this before writing any page code)

- [ ] All shared UI components used in this page exist in `src/shared/ui/`
- [ ] All image/SVG assets used in this page are wrapped as components
- [ ] All feature-specific components are defined in `src/features/<feature>/components/`
- [ ] No design values are hardcoded — all tokens reference `tailwind.config.js`
- [ ] No duplicate components — always reuse existing ones

---

# 8. Coding Rules

- Use functional components, hooks, and explicit TypeScript types/interfaces
- **Component declaration**: always use `export default function Name() {}` form
  - Exception: `memo`, `forwardRef` wrapping — use `const Name = memo(...)` + separate export
  - Small internal helper components — `const` arrow functions allowed
- Use **NativeWind `className`** for styling — avoid `style={{}}` and `StyleSheet.create`
- NativeWind v4 (Tailwind CSS v3): manage custom styles in `tailwind.config.js`
- Ensure `babel.config.js` and `metro.config.js` maintain NativeWind v4 config
- API calls: wrap with **Axios**, manage async state with **TanStack Query** (`useQuery`, `useMutation`)
- Preserve all existing comments and docstrings — do not remove them

---

# 9. Avoid Patterns

- Do not use `any` type — write `[feature]/types.ts` and export proper interfaces
- Avoid `margin`/`padding` — use `gap` or empty `h-{}` spacer divs instead
- If a component exceeds 150 lines, split into separate hook or component files
- Do not use `React.[module]` — import directly: `import { useState } from 'react'`
- Do not use inline functions — use named handlers: `handle{Target}{Event}` (e.g. `handleCTAButtonPress`)
- Do not use inline styles
- Do not use `relative`/`absolute` layout — use flex and grid Tailwind classes instead
- Do not create custom asset files — copy SVG from Figma and convert to SVG component
- Do not install new icon packages — all icons come from Figma
- Do not hardcode design values — always use `tailwind.config.js` or read from Figma

---

# 10. MCP Configuration Notes

- **Required flag**: `--stdio` (default HTTP mode is incompatible with Claude Code)
- **API token**: expires every 90 days — verify before use, never commit to repositorys
- **Figma File Key**: ask the user before querying — never hardcode in any file
- When querying Figma: specify `fileKey` and `node-id` separately for reliability
