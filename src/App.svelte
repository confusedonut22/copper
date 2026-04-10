<script>
  import GameTable from './ui/GameTable.svelte'
  import { initializeLayoutContext } from './game/layout.svelte.js'

  initializeLayoutContext()
</script>

<GameTable />
