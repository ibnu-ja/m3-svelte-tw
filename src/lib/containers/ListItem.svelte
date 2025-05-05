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

  //TODO line height variant props apply clamp on ListItemContent

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
      <ListItemContent type="overline">{overline}</ListItemContent>
    {/if}
    <!--<ListItemSupporting></ListItemSupporting>-->
    <ListItemContent type="headline">{headline}</ListItemContent>
    {#if supporting}
      <ListItemContent type="supporting">{supporting}</ListItemContent>
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
