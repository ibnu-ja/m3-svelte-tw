<script lang="ts" module>
  import type { DropdownMenuContentProps } from "bits-ui";
  import type { ButtonVariant, ButtonSize } from "./Button.svelte";
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  export type SplitButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    side?: DropdownMenuContentProps["side"];
    align?: DropdownMenuContentProps["align"];
    children: Snippet;
    menu: Snippet;
  } & Omit<HTMLButtonAttributes, "class">;
</script>

<script lang="ts">
  import iconExpand from "@ktibow/iconset-material-symbols/keyboard-arrow-down";
  import { DropdownMenu } from "bits-ui";
  import Icon from "$lib/misc/Icon.svelte";
  import Button from "./Button.svelte";

  let {
    variant = "filled",
    size = "s",
    side = "bottom",
    align = "start",
    children,
    menu,
    ...props
  }: SplitButtonProps = $props();
</script>

<div class="inline-grid grid-cols-[1fr_auto] gap-[0.125rem] [--outer:1.25rem] [--half:var(--m3-shape-medium)] [--inner:var(--m3-shape-extra-small)] [print-color-adjust:exact]">
  <Button
    {variant}
    {size}
    class="![border-start-start-radius:var(--outer)] ![border-end-start-radius:var(--outer)] ![border-start-end-radius:var(--inner)] ![border-end-end-radius:var(--inner)] hover:![border-start-end-radius:var(--half)] hover:![border-end-end-radius:var(--half)] active:![border-start-end-radius:var(--half)] active:![border-end-end-radius:var(--half)]"
    {...props}
  >
    {@render children()}
  </Button>

  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      {#snippet child({ props: triggerProps })}
        <Button
          {variant}
          {size}
          class="!w-12 ![border-start-start-radius:var(--inner)] ![border-end-start-radius:var(--inner)] ![border-start-end-radius:var(--outer)] ![border-end-end-radius:var(--outer)] hover:![border-start-start-radius:var(--half)] hover:![border-end-start-radius:var(--half)] active:![border-start-start-radius:var(--half)] active:![border-end-start-radius:var(--half)] data-[state=open]:![border-start-start-radius:var(--outer)] data-[state=open]:![border-end-start-radius:var(--outer)] [&>svg]:[transition:rotate_var(--m3-easing-fast)] data-[state=open]:[&>svg]:[rotate:180deg]"
          {...triggerProps}
        >
          <Icon icon={iconExpand} size={22} />
        </Button>
      {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content {side} {align} class="z-50">
      {@render menu()}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
