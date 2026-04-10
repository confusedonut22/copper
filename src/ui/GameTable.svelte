<script>
  import { getContextLayout } from "../game/layout.svelte.js";
  import BlackjackDesktopLayout from "../lib/layouts/BlackjackDesktopLayout.svelte";
  import BlackjackPortraitLayout from "../lib/layouts/BlackjackPortraitLayout.svelte";

  const { stateLayoutDerived } = getContextLayout();
</script>

{#if stateLayoutDerived.isStacked()}
  <BlackjackPortraitLayout />
{:else}
  <BlackjackDesktopLayout />
{/if}
