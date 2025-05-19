<script lang="ts">
  //import ButtonLink from "$lib/actions/ButtonLink.svelte";
  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
  import { Button } from "$lib/actions";

  const { minimalDemo, relevantLinks = [] }: {
    minimalDemo: string,
    relevantLinks: { title: string; link: string }[]
  } = $props();
</script>

<div class="anchor flex flex-col gap-2">
  <Highlight language={xml} code={minimalDemo} />

  <div>
    {#each relevantLinks as { title, link }, i}
      <Button as="a" type={i === 0 ? "filled" : "tonal"} href={link}>{title}</Button>
    {/each}
  </div>
</div>

<style>
    .anchor {
        :global {
            pre {
                margin: 0;
            }

            code {
                padding: 0;
                background: transparent;
                white-space: pre-wrap;
            }
        }
    }
</style>
