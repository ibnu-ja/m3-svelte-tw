<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";
  import { cn } from "$lib/misc/utils";
  import { type ListItemLeadingImageVariants, listItemLeadingImage } from "$lib/containers/list/index";

  type Props = ListItemLeadingImageVariants &
    SvelteHTMLElements["img"] & {
    [key: string]: any;
  };

  let { class: className, type, ...attrs }: Props = $props();
</script>

<!--suppress HtmlRequiredAltAttribute, RequiredAttributes -->
<img
  class={cn(listItemLeadingImage({ type }), className)}
  {...attrs}
/>
