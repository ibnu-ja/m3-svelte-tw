<script lang="ts">
  import { type Snippet } from "svelte";
  import type { HTMLDialogAttributes } from "svelte/elements";
  import { cn } from "$lib/misc/utils";

  let dialog: HTMLDialogElement | undefined = $state();

  $effect(() => {
    if (!dialog) return;
    if (open) dialog.showModal();
    else dialog.close();
  });

  type Props = {
    open?: boolean;
    closeOnEsc?: boolean;
    closeOnClick?: boolean;
    onCloseByEsc?: () => void;
    onCloseByClick?: () => void;
    children?: Snippet;
    class?: HTMLDialogAttributes["class"];
    [key: string]: any;
  };

  let {
    open = $bindable(false),
    closeOnEsc = true,
    closeOnClick = true,
    onCloseByEsc,
    onCloseByClick,
    children,
    buttons,
    class: className,
    ...attrs
  }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!--suppress HtmlDeprecatedAttribute -->
<dialog
  class={cn(
    [
      "m-auto",
      "rounded-xl",
      "bg-surface-container-high",
      "border-none",
      "min-w-70",
      "max-w-140",
      "p-0",
      "overflow-auto",
      "backdrop:bg-scrim/30",
      "transition-opacity",
      "transition-visibility",
      "backdrop:animate-[opacity_400ms]",
      "open:animate-[dialogIn_500ms_var(--m3-easing-decel),_opacity_100ms_var(--m3-easing-decel)]",
      "open:opacity-100",
      "open:visible",
      "pointer-events-auto",
      "backdrop:bg-scrim/30",
      "backdrop:animate-[opacity_400ms]",
      "forced-colors:outline-2",
      "forced-colors:outline-solid",
      "forced-colors:outline-[canvastext]",
    ],
    className,
  )}
  oncancel={(e) => {
    if (closeOnEsc) {
      onCloseByEsc?.();
      open = false;
    } else {
      e.preventDefault();
    }
  }}
  onclick={() => {
    if (closeOnClick) {
      onCloseByClick?.();
      open = false;
    }
  }}
  bind:this={dialog}
  {...attrs}
>
  {@render children?.()}
</dialog>
