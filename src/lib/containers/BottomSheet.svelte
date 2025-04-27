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
    //to prevent this error: Invalid keyframe value for property maxHeight: -9.160396799999939px
    const clampedHeight = Math.max(height, 48);
    return {
      duration: 400,
      easing: easeEmphasizedDecel,
      ...options,
      css: (t) => `max-height: ${t * clampedHeight}px`,
    };
  };

  const moveWheel = (e: WheelEvent) => {
    e.preventDefault()
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
<!--suppress HtmlDeprecatedAttribute oncancel event is deprecated -->
<dialog
  class={cn(
    "m-auto",
    "mb-0",
    "w-full",
    "max-w-[40rem]",
    "overflow-hidden",
    "touch-none",
    "bg-surface-container-low",
    "text-on-surface",
    "rounded-t-xl",
    "border-none",
    "p-0",
    "leaving",
    className,
  )}
  style="max-height: {height}px"
  use:open
  use:outroClass
  onmousedown={() => {
    close("click");
  }}
  oncancel={() => {
    close("browser");
  }}
  onwheel={moveWheel}
  in:heightAnim
  out:heightAnim={{ easing: easeEmphasizedAccel, duration: 300 }}
  {...attrs}
>
  <!--suppress HtmlUnknownAttribute ontouchstart -->
  <div
    bind:this={container}
    class="px-4"
    ontouchstart={(e) => {
      isDragging = true;
      startY = e.touches[0].clientY;
    }}
  >
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="flex items-center justify-center w-full h-12 cursor-grab handle-container"
      onmousedown={(e) => {
        isDragging = true;
        startY = e.clientY;
      }}
    >
      <div class="bg-on-surface-variant/40 w-8 h-1 rounded handle"></div>
    </div>
    {@render children?.()}
  </div>
</dialog>

<style>
  :root {
    --m3-bottom-sheet-shape: var(--m3-util-rounding-extra-large);
  }

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

  @media (forced-colors: active) {
    .handle {
      background-color: canvastext;
    }
  }
</style>
