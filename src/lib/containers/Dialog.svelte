<script lang="ts">
  import { type Snippet } from "svelte";
  import type { HTMLDialogAttributes } from "svelte/elements";
  import { cn } from "$lib/misc/utils";

  //Breaking changes:
  //removed icon, hheadline, and buttons props. Delegate everything to parent component
  //export let display = "flex";
  //export let extraOptions: HTMLDialogAttributes = {};
  //export let icon: IconifyIcon | undefined = undefined;
  //export let headline: string;
  //export let open: boolean;
  //export let closeOnEsc = true;
  //export let closeOnClick = true;
  //
  //const dispatch = createEventDispatcher();
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
      "open:animate-(--dialog-animation)",
      "open:opacity-100",
      "open:visible",
      "pointer-events-auto",
      "backdrop:bg-scrim/30",
      "backdrop:animate-opacity",
      "backdrop:duration-400",
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

<style>
  :root {
    --m3-dialog-shape: var(--m3-util-rounding-extra-large);
    --dialog-animation: dialogIn 500ms var(--m3-easing-decel), opacity 100ms var(--m3-easing-decel);
  }

  /*dialog[open] .headline {*/
  /*  animation: opacity 150ms;*/
  /*}*/

  /*dialog[open] .content {*/
  /*  animation: opacity 200ms;*/
  /*}*/

  /*dialog[open] .buttons {*/
  /*  position: relative;*/
  /*  animation:*/
  /*    buttonsIn 500ms var(--m3-easing-decel),*/
  /*    opacity 200ms 100ms backwards;*/
  /*}*/

  @media print, (forced-colors: active) {
    dialog {
      outline: solid 0.125rem canvastext;
    }
  }
</style>
