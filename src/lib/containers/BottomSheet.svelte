<script lang="ts">
  import type { TransitionConfig } from "svelte/transition";
  import { easeEmphasizedAccel, easeEmphasizedDecel } from "$lib/misc/easing";
  import { outroClass } from "$lib/misc/animation";
  import type { Snippet } from "svelte";
  import type { HTMLDialogAttributes } from "svelte/elements";
  import { cn } from "$lib/misc/utils";

  let height = $state(480);
  let container: HTMLDivElement | undefined = $state();
  let isDragging = $state(false);
  let startY = $state(0);

  type Props = {
    close?: (closedBy?: string) => void;
    children: Snippet;
    class?: HTMLDialogAttributes["class"];
    [key: string]: any;
  };

  let { close, children, class: className, ...attrs }: Props = $props();

  $effect(() => {
    if (height < 48) close?.("low");
  });

  const open = (node: HTMLDialogElement) => node.showModal();

  const heightAnim = (
    node: HTMLDialogElement,
    options: Record<string, unknown> = {},
  ): TransitionConfig => {
    //TODO to prevent this error: Invalid keyframe value for property maxHeight: -9.160396799999939px
    if (node.clientHeight < height) height = node.clientHeight;
    return {
      duration: 400,
      easing: easeEmphasizedDecel,
      ...options,
      css: (t) => `max-height: ${t * height}px`,
    };
  };

  const moveWheel = (e: WheelEvent) => {
    e.preventDefault();
    height += e.deltaY;
    if (container && container.clientHeight < height) height = container.clientHeight;
  };
  const moveMouse = (e: { clientY: number }) => {
    if (isDragging) {
      const distance = e.clientY - startY;
      height -= distance;
      startY = e.clientY;
    }
  };
</script>

<svelte:window
  on:mousemove={moveMouse}
  on:mouseup={() => (isDragging = false)}
  on:touchmove={(e) => moveMouse(e.touches[0])}
  on:touchend={() => (isDragging = false)}
/>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!--suppress HtmlDeprecatedAttribute oncancel event is deprecated -->
<dialog
  class={cn(
    "m-auto",
    "mb-0",
    "w-full",
    "max-w-140",
    "overflow-hidden",
    "touch-none",
    "bg-surface-container-low",
    "text-on-surface",
    "rounded-t-xl",
    "border-none",
    "p-0",
    className,
  )}
  style="max-height: {height}px"
  use:open
  use:outroClass
  onmousedown={() => {
    close?.("click");
  }}
  oncancel={(e) => {
    e.preventDefault();
    close?.("browser");
  }}
  onwheel={moveWheel}
  in:heightAnim
  out:heightAnim={{ easing: easeEmphasizedAccel, duration: 300 }}
>
  <div
    class="py-0 px-4"
    bind:this={container}
    ontouchstart={(e) => {
      isDragging = true;
      startY = e.touches[0].clientY;
    }}
  >
    <!--handle container-->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="flex items-center justify-center w-full h-12 cursor-grab"
      onmousedown={(e) => {
        e.preventDefault();
        isDragging = true;
        startY = e.clientY;
      }}
    >
      <!--handle-->
      <div class="bg-on-surface-variant/40 w-8 h-1 rounded forced-colors:bg-[canvastext]"></div>
    </div>
    {@render children?.()}
  </div>
</dialog>

<style>
  dialog::backdrop {
    background-color: rgb(var(--m3-scheme-scrim) / 0.5);
    animation: backdrop 400ms;
  }

  dialog:global(.leaving)::backdrop {
    background-color: transparent;
    animation: backdropReverse 400ms;
  }

  @keyframes backdrop {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: rgb(var(--m3-scheme-scrim) / 0.5);
    }
  }

  @keyframes backdropReverse {
    0% {
      background-color: rgb(var(--m3-scheme-scrim) / 0.5);
    }
    100% {
      background-color: transparent;
    }
  }
</style>
