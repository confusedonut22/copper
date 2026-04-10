# Handoff For New Chat

Date: 2026-04-09

## Active repo scope

Only work in these repos unless the user explicitly widens scope:

- `/Users/gerryturnbow/chadjack`
- `/Users/gerryturnbow/chadjack/game`
- `/Users/gerryturnbow/submittal-desktop-done`
- `/Users/gerryturnbow/submittal-desktop-done/game`

Canonical source when the two disagree:

- `/Users/gerryturnbow/chadjack`

## User preferences that matter

- Do not widen scope.
- Be concise and execution-first.
- Preserve locked mobile behavior unless a real blocker requires change.
- Desktop changes are allowed only when needed.
- Use absolute paths.
- Do not do screenshots unless the user asks. The user explicitly said: stop doing screenshots.

## Current status

Both game repos currently build successfully:

- `/Users/gerryturnbow/chadjack/game` -> `npm run build` passed on 2026-04-09
- `/Users/gerryturnbow/submittal-desktop-done/game` -> `npm run build` passed on 2026-04-09

Known non-blocking warnings still exist during build:

- Svelte a11y warnings for clickable non-interactive `div`s
- unused CSS selector warnings
- existing Fredoka font-resolution warning

## Important completed work already in place

- Insurance logic was updated to track per hand instead of one round-level insurance flag.
- Dealer-blackjack result summaries now list wins first for insured hands, per user request.
- Stake client package integration exists in both game repos.
- Backend mock/authority scaffolding was tightened earlier with sequence enforcement and persistence work.
- Stale files were moved into in-repo `stale/` folders rather than deleted outright.

## Latest task in progress

The latest user request was:

- align regular card corner indices so the rank/letter and suit symbol line up visually with the custom Chad king cards

This was being handled as a surgical CSS-only change, not an asset rebuild.

Files touched for that latest task:

- `/Users/gerryturnbow/chadjack/game/src/ui/GameTable.svelte`
- `/Users/gerryturnbow/submittal-desktop-done/game/src/ui/GameTable.svelte`

What changed:

- standard card corner index positioning was narrowed so it applies only to `.card-face`, not generic `.card`
- current selectors now use:
  - `.card-face .card-tl`
  - `.card-face .card-br`
  - `.card-face.small .card-tl`
  - `.card-face.small .card-br`
- inset currently set to `top/bottom: 10px` and `left/right: 12px`
- `.card-corner` now uses `align-items: center`

Important:

- This latest alignment tweak is not visually verified yet.
- The last attempted proof image was useless because it only captured the intro screen.
- Do not claim the card alignment is confirmed until it is checked on an actual card-render screen.

## Exact next step for the new chat

1. Stay in `/Users/gerryturnbow/chadjack/game` first.
2. Verify the regular-card corner indices against the custom Chad king card on a real gameplay/card-render state.
3. If needed, only tweak the regular card corner inset values in `/Users/gerryturnbow/chadjack/game/src/ui/GameTable.svelte`.
4. Mirror the same confirmed change into `/Users/gerryturnbow/submittal-desktop-done/game/src/ui/GameTable.svelte`.
5. Re-run:
   - `npm run build` in `/Users/gerryturnbow/chadjack/game`
   - `npm run build` in `/Users/gerryturnbow/submittal-desktop-done/game`

## Do not re-open these arguments unless the user asks

- Do not search outside the two scoped repos.
- Do not resume the old mobile/desktop drift thread.
- Do not reintroduce screenshot proofs unless the user asks.
- Do not change unrelated gameplay or layout while fixing the card-corner alignment.

## Quick repo state notes

There are many pre-existing modified files across both repos from the ongoing submission-readiness work. Do not revert unrelated changes.

Most relevant files for the next step:

- `/Users/gerryturnbow/chadjack/game/src/ui/GameTable.svelte`
- `/Users/gerryturnbow/submittal-desktop-done/game/src/ui/GameTable.svelte`
- `/Users/gerryturnbow/chadjack/game/src/game/store.js`
- `/Users/gerryturnbow/chadjack/game/src/game/roundSettlement.js`
- `/Users/gerryturnbow/submittal-desktop-done/game/src/game/store.js`
- `/Users/gerryturnbow/submittal-desktop-done/game/src/game/roundSettlement.js`

## One-line start prompt for the next chat

"Work only in `/Users/gerryturnbow/chadjack` and `/Users/gerryturnbow/submittal-desktop-done`. Pick up from `/Users/gerryturnbow/chadjack/HANDOFF_NEW_CHAT_2026-04-09.md`. Do not use screenshots unless I ask. Finish the regular-card corner index alignment so standard card rank/suit markers line up with the custom Chad king card, then rebuild both game repos."
