<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";
  import { cn } from "$lib/misc/utils";
  import {
    type ListItemLeadingImageVariants,
    listItemLeadingImage,
    type InternalItemListContext, internalItemListContextKey
  } from "$lib/containers/list/index";
  import { getContext, onDestroy, onMount } from "svelte";

  type Props = ListItemLeadingImageVariants &
    SvelteHTMLElements["img"] & {
    [key: string]: any;
  };

  let { class: className, type, ...attrs }: Props = $props();

  let context = getContext<InternalItemListContext>(internalItemListContextKey)

  onMount(() => {
    if (context.listItemImageType == null) {
      context.listItemImageType = type
    }
  })

  onDestroy(() => {
    if (context.listItemImageType != null) {
      context.listItemImageType = null
    }
  })

  $effect(() => {
    context.listItemImageType = type
  })
</script>

<!--suppress HtmlRequiredAltAttribute, RequiredAttributes -->
<img
  class={cn(listItemLeadingImage({ type }), className)}
  {...attrs}
/>
