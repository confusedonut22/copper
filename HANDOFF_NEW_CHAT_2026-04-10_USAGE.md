# Handoff For New Chat

Date: 2026-04-10

## Canonical Repo

Use only:

- `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree`

Do not drift to older repos or older handoff paths.

## Locked User Constraints

- One shared build only.
- Preserve desktop behavior unless the user explicitly allows desktop changes.
- For mobile work, use mobile-only scope by default.
- Be concise and execution-first.
- Use the document as source of truth instead of guessing:
  - `/Users/gerryturnbow/Downloads/Stake_Engine_Non_Slot_Game_Blackjack_—_Deep_Dive:_Single_Build_Mobile.md`
- Wait 6 seconds before verification screenshots.
- Minimize unnecessary usage:
  - keep terminal/session count low
  - avoid duplicate preview servers
  - avoid unnecessary agents
  - keep handoff docs current

## What We Were Working On Exactly

The active workstream is:

- stop approximating mobile with ad hoc breakpoint logic
- use the Stake document’s real path for one shared desktop/mobile build
- move the repo toward Stake-style layout classification
- keep desktop frozen while improving mobile portrait structure

## What Has Actually Been Done

- Added a local Stake-style layout engine modeled directly from `StakeEngine/web-sdk`:
  - `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/game/layout.svelte.js`
- Added root layout context wiring:
  - `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/App.svelte`
- Root layout switch now exists:
  - `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/ui/GameTable.svelte`
- Added layout wrappers plus shared core:
  - `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/lib/layouts/BlackjackDesktopLayout.svelte`
  - `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/lib/layouts/BlackjackPortraitLayout.svelte`
  - `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/lib/layouts/BlackjackTableLayoutCore.svelte`
- `GameTable.svelte` now switches by:
  - `stateLayoutDerived.isStacked()`
- Verified live resize switching without reload:
  - desktop width returns `data-layout="desktop"`
  - same page resized to mobile width returns `data-layout="portrait"`
- Updated Pixi stage/container placement to use layout-derived values:
  - `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/game/canvas.js`
- Added `?device=mobile` non-visual optimization hook in `canvas.js`:
  - lower effective renderer resolution on mobile hint
- Verified screenshots:
  - `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/core-refactor-mobile-proof-2026-04-10.png`
  - `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/core-refactor-desktop-proof-2026-04-10.png`

## What Has NOT Been Done Yet

- No blackjack `book` event playback map has been implemented yet.
- No custom `bookEvents` handler layer has been added for:
  - `dealCards`
  - `playerHit`
  - `playerBust`
  - `roundResult`
  - `finalWin`
- No true portrait-owned DOM tree exists yet.
- `BlackjackPortraitLayout.svelte` is currently only a wrapper around the shared core, not a dedicated portrait composition.
- The shared core still contains desktop-first markup with portrait rescue CSS.
- Assets/fonts are not yet Stake-CDN aligned for real submission.
- Existing Svelte a11y warnings remain in the shared core.

## Most Recent Preview

- Latest preview:
  - `https://jackchad-dek0kcrsh-confusedonut22s-projects.vercel.app`

Previous previews that can be ignored unless debugging deploy drift:

- `https://jackchad-qxpshv9zi-confusedonut22s-projects.vercel.app`
- `https://jackchad-dvpcp0rim-confusedonut22s-projects.vercel.app`

## Files Touched Recently

- `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/App.svelte`
- `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/ui/GameTable.svelte`
- `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/game/layout.svelte.js`
- `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/game/canvas.js`
- `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/lib/layouts/BlackjackDesktopLayout.svelte`
- `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/lib/layouts/BlackjackPortraitLayout.svelte`
- `/Users/gerryturnbow/Downloads/submittal/jackchad-worktree/src/lib/layouts/BlackjackTableLayoutCore.svelte`
- `/Users/gerryturnbow/.codex/skills/stake-single-build-mobile-brief/SKILL.md`
- `/Users/gerryturnbow/.codex/skills/responsive-table-optimizer/SKILL.md`

## Exact Next Step

Do this next and only this next:

1. Keep the current one-build layout switch and desktop path untouched.
2. Extract a true portrait-owned DOM from `src/lib/layouts/BlackjackTableLayoutCore.svelte` into `src/lib/layouts/BlackjackPortraitLayout.svelte`.
3. Move only shared helpers/state/actions into the core or a shared module; do not duplicate gameplay logic.
4. Preserve desktop selectors and structure while removing portrait dependence on desktop-first markup.
5. Do not start on blackjack `book` event playback until the user explicitly prioritizes it again.

## Usage-Saving Rules For The New Chat

- Reuse one preview server if possible.
- Reuse one mock RGS server if needed.
- Do not open extra ports unless the current preview is stale.
- Use at most one or two agents, only for bounded audit/approval.
- Prefer medium reasoning over fast for this task.
- Low reasoning is acceptable for bounded mechanical edits or grep/build/check loops, but not for layout architecture decisions.
- Update this handoff after each major pivot instead of re-explaining the whole thread.

## Compact Restart Prompt

Use this exact start prompt in a new chat:

`Work only in /Users/gerryturnbow/Downloads/submittal/jackchad-worktree. Read /Users/gerryturnbow/Downloads/Stake_Engine_Non_Slot_Game_Blackjack_—_Deep_Dive:_Single_Build_Mobile.md, /Users/gerryturnbow/Library/Containers/ru.keepcoder.Telegram/Data/tmp/Stake engine chat gpt recommended steps .pdf, and /Users/gerryturnbow/Downloads/submittal/jackchad-worktree/important-docs/HANDOFF_NEW_CHAT_2026-04-10_USAGE.md first. One shared build only. Preserve desktop. Keep the current root layout switch and canvas layout integration. Next do only the true portrait-owned DOM extraction from src/lib/layouts/BlackjackTableLayoutCore.svelte into src/lib/layouts/BlackjackPortraitLayout.svelte without duplicating game logic or drifting into ad hoc CSS guessing.` 
