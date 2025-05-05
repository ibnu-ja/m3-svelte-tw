<script lang="ts">
  import { type Snippet } from "svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import ListItemContent from "$lib/containers/list-item/ListItemContent.svelte";
  import { cn, Layer } from "$lib/index";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import { listItem, type ListItemVariants } from "$lib/containers/index";

  interface Props extends PrimitiveProps, ListItemVariants {
    overline?: string;
    headline?: string;
    supporting?: string;
    leading?: Snippet;
    trailing?: Snippet;
  }

  let {
    as = "div",
    lines,
    overline,
    headline,
    supporting,
    class: className,
    leading,
    trailing,
    children,
    ...attrs
  }: Props = $props();

  let _lines = $derived(typeof lines == "number" ? (String(lines) as "1" | "2" | "3") : lines);
</script>

<Primitive {as}
           class={cn(listItem({lines: _lines }), className, (as === "button" || as === "label" || as === "a") && "cursor-pointer")}
           {...attrs}>
  {#if as === "button" || as === "label" || as === "a" }
    <Layer />
  {/if}
  <!--{@render leading?.()}-->
  {#if leading}
    <div class="leading">
      {@render leading()}
    </div>
  {/if}
  <div class="grow">
    {#if overline}
      <ListItemContent>{overline}</ListItemContent>
    {/if}
    <!--<ListItemSupporting></ListItemSupporting>-->
    <p class="headline m3-font-body-large">{headline}</p>
    {#if supporting}
      <p class="supporting m3-font-body-medium">{supporting}</p>
    {/if}
  </div>
  <!--{@render trailing?.()}-->
  {#if trailing}
    <div class="trailing m3-font-label-small">
      {@render trailing()}
    </div>
  {/if}
</Primitive>

<style>
    /*.body {*/
    /*  flex-grow: 1;*/
    /*}*/
    .leading,
    .trailing {
        display: contents;
        color: rgb(var(--m3-scheme-on-surface-variant));
    }

    .leading > :global(svg),
    .trailing > :global(svg) {
        width: 1.5rem;
        height: 1.5rem;
        flex-shrink: 0;
    }

    p {
        margin: 0;
    }

    .supporting,
    .overline {
        color: rgb(var(--m3-scheme-on-surface-variant));
    }

    .headline {
        color: rgb(var(--m3-scheme-on-surface));
    }
</style>
