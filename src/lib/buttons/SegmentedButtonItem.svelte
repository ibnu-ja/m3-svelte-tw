<script lang="ts">
  import type { HTMLLabelAttributes, SvelteHTMLElements } from "svelte/elements";
  import type { IconifyIcon } from "@iconify/types";
  import iconCheck from "@ktibow/iconset-material-symbols/check";
  import Icon from "$lib/misc/_icon.svelte";
  import Layer from "$lib/misc/Layer.svelte";
  import type { Snippet } from "svelte";

  interface SegmentedButtonProps extends HTMLLabelAttributes {
    class?: SvelteHTMLElements["label"]["class"];
    input?: string | null;

    icon?: IconifyIcon;
    children: Snippet;
  }

  let { input, icon, children, class: className, ...attrs }: SegmentedButtonProps = $props();
</script>

<label
  for={input}
  class="{className}
    m3-font-label-large
    flex items-center justify-center
    px-4
    min-w-[3rem]
    text-[rgb(var(--m3-scheme-on-surface))]
    transition-all duration-200
    cursor-pointer
    whitespace-nowrap select-none
    relative overflow-hidden
    peer-checked:bg-[rgb(var(--m3-scheme-secondary-container))]
    peer-checked:text-[rgb(var(--m3-scheme-on-secondary-container))]
  "
  {...attrs}
>
  <Layer />
  <!--putting div inside label is not allowed apparently-->
  {#if icon}
    <span
      class="custom icon flex-shrink-0 transform origin-[0.563rem_0.563rem] transition-all duration-200 w-0 opacity-0 rotate-[60deg]"
    >
      <Icon {icon} class="w-[1.125rem] h-[1.125rem]" />
    </span>
  {/if}

  <span
    class="check icon flex-shrink-0 transform origin-[0.563rem_0.563rem] transition-all duration-200 w-0 opacity-0"
  >
    <Icon icon={iconCheck} class="w-[1.125rem] h-[1.125rem]" />
  </span>

  <span class="start-pad pad flex-shrink-0 transition-all duration-200 w-[0.8125rem]"></span>

  {@render children?.()}

  {#if !icon}
    <span class="end-pad pad flex-shrink-0 transition-all duration-200 w-[0.8125rem]"></span>
  {/if}
</label>

<style>
  :global(label) ~ label {
    border-left: 0.0625rem solid rgb(var(--m3-scheme-outline));
  }

  :global(input:disabled) + label {
    color: rgb(var(--m3-scheme-on-surface) / 0.38);
    cursor: auto;
  }

  :global(input:checked) + label > .check.icon {
    opacity: 1;
  }

  .custom.icon + .check.icon {
    rotate: -60deg;
  }

  :global(input:checked) + label > .custom.icon + .check.icon {
    rotate: 0deg;
  }

  :global(input:not(:checked)) + label > .custom.icon {
    opacity: 1;
    rotate: 0deg;
  }

  :global(input:checked) + label > .start-pad,
  .custom.icon ~ .start-pad {
    width: 1.625rem;
  }

  :global(input:checked) + label > .end-pad {
    width: 0;
  }

  label {
    -webkit-tap-highlight-color: transparent;
  }
</style>
