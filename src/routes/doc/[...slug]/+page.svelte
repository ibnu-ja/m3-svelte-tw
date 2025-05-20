<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps  = $props();

  let Comp = $derived(data.component);
</script>

{#if Comp}

  <Comp />

{/if}