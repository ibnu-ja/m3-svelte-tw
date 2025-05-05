<script lang="ts" generics="T">
  import { type Component, type Snippet } from "svelte";
  import type { PrimitiveProps } from "$lib/primitive/index";

  // Destructure props with rest parameters
  let { as = "div", asChild = false, children, ...attrs }: PrimitiveProps = $props();

  //TODO generic props https://svelte.dev/docs/svelte/typescript#Generic-$props
  let Comp: ConstructorOfATypedSvelteComponent | Component<any, any, any> | null | undefined =
    $state();

  // set the value with condition to avoid typescript angry at rendering string
  if (typeof as !== "string") Comp = as;
</script>

{#if asChild}
  <!-- Render the slot content without wrapping it in an element -->
  {@render children?.()}
{:else if typeof as !== "string"}
  <!--render as component-->
  <Comp {...attrs}>{@render children?.()}</Comp>
{:else}
  <!--render as HTMLElement-->
  <svelte:element this={as} {...attrs}>{@render children?.()}</svelte:element>
{/if}
