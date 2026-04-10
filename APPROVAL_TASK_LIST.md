# Sidebets Blackjack — Stake Engine Approval Task List

This file is the current practical tracker for the canonical submission repo:
`https://github.com/confusedonut22/chadjack`

Status legend:
- [x] completed with high confidence in this repo
- [ ] still open, external, or not yet fully proven

---

## 1. Rules / product lock

- [x] Real blackjack product direction is locked
- [x] Perfect Pairs is included in logic/docs
- [x] 21+3 is included in logic/docs
- [x] Dealer hits soft 17 is locked
- [x] Blackjack pays 7:5 is locked in runtime/math/docs
- [x] Double is restricted to hard 9/10/11 only
- [x] Same-rank split only is locked
- [x] No DAS is locked
- [x] Split aces receive one card only
- [x] Resplitting is blocked

## 2. Frontend / gameplay runtime

- [x] Current Svelte/Vite frontend source is in the canonical repo
- [x] Split action exists in the current runtime path
- [x] Split/double legality is derived from current store/runtime truth
- [x] Replay bootstrap uses the official-style replay route
- [x] Replay launch does not require a sessionID
- [x] Replay hydration preserves split metadata needed for no-DAS / split-ace rules
- [x] Rules/help copy is aligned to the locked ruleset
- [x] Multi-hand split-round messaging is push-aware and no longer collapses to a blank mixed-result banner

## 3. Math / settlement / RTP

- [x] Python math engine is split-capable
- [x] Split-created 21 does not pay as natural blackjack
- [x] Blackjack payout is aligned to 7:5 across runtime and math
- [x] Wager accounting around split/double is covered by tests
- [x] Published base RTP is locked at approximately 97.9%
- [x] Side-bet RTP values are surfaced in final docs
- [x] RTP checkpoint/export helpers exist in repo

## 4. Export / bundle

- [x] Submission bundle exists under `bundle/`
- [x] Artifact inventory is prepared
- [x] Frozen bundle names are in use
- [x] Export path reflects the split-capable blackjack flow

## 5. RGS / replay / backend boundary

- [x] Launch parsing covers Stake-style session/query params
- [x] Frontend client implements authenticate / balance / play / event / end-round / replay flows
- [x] Replay is materially implemented and hardened in the frontend
- [x] Mock RGS exists for local authority/replay/resume testing
- [ ] Real production RGS/backend authority is still external to this repo
- [ ] Blackjack-specific replay expectations still need final external confirmation
- [ ] Final backend-owned `round.state` contract still depends on Stake-facing integration choices

## 6. Tests / validation

- [x] Python readiness tests pass
- [x] App test suite passes
- [x] App production build passes
- [x] Split-rule checklist tests pass
## 7. Docs / package consistency

- [x] Canonical repo docs point to `confusedonut22/chadjack`
- [x] Ruleset lock doc exists
- [x] Submission checklist exists
- [x] Review entrypoint exists
- [x] Work log is refreshed to current repo state
- [x] RGS/client check doc exists
- [ ] Provider branding thumbnail still needs final asset upload

## Current honest open items

1. Final provider/game thumbnail upload
2. Real Stake-aligned backend/RGS authority outside the local mock scaffold
3. Final external confirmation of blackjack-specific replay expectations if Stake reviewer feedback requires it
