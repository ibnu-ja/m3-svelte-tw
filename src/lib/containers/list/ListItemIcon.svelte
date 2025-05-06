<script lang="ts">
  import { cn, Icon } from "$lib";
  import type { IconifyIcon } from "@iconify/types";
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = {
    icon: IconifyIcon;
    class?: SvelteHTMLElements["svg"]["class"];
    [key: string]: any;
  };

  let { icon, class: className, ...attrs }: Props = $props();
</script>

<Icon {icon} width="1.5rem" height="1.5rem" class={["shrink-0", className]} />
