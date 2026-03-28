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

<div class="inline-grid grid-cols-[1fr_auto] gap-[0.125rem] [print-color-adjust:exact]">
  <Button
    {variant}
    {size}
    class="rounded-ss-[1.25rem] rounded-es-[1.25rem] rounded-se-xs rounded-ee-xs hover:rounded-se-xl hover:rounded-ee-xl active:rounded-se-xl active:rounded-ee-xl"
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
          class="w-12 rounded-ss-xs rounded-es-xs rounded-se-[1.25rem] rounded-ee-[1.25rem] hover:rounded-ss-xl hover:rounded-es-xl active:rounded-ss-xl active:rounded-es-xl data-[state=open]:rounded-ss-xs data-[state=open]:rounded-es-xs [&>svg]:transition-transform [&>svg]:ease-m3-fast [&>svg]:duration-m3-fast data-[state=open]:[&>svg]:rotate-180"
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
