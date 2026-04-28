<script lang="ts">
  import type { HTMLButtonAttributes, HTMLAttributes, HTMLAnchorAttributes, HTMLLabelAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import type { NotLink } from "$lib/misc/typing-utils";

  type AnchorAttrs = HTMLAnchorAttributes & { href: string };

  export type ActionProps =
    | AnchorAttrs
    | (NotLink<HTMLLabelAttributes> & { label: true })
    | (NotLink<HTMLAttributes<HTMLElement>> & { summary: true })
    | NotLink<HTMLButtonAttributes>;

  export type PressElementProps = {
    class?: string;
    children?: Snippet;
    ref?: HTMLElement | null;
  } & ActionProps;

  let {
    class: className = "",
    children,
    ref = $bindable(null),
    ...props
  }: PressElementProps = $props();
</script>

{#if "href" in props && props.href !== undefined}
  {@const { disabled, href, ...rest } = props as AnchorAttrs & { disabled?: boolean }}
  <a
    bind:this={ref}
    class={className}
    href={disabled ? undefined : href}
    aria-disabled={disabled ? true : undefined}
    role={disabled ? "link" : undefined}
    tabindex={disabled ? -1 : undefined}
    {...rest}
  >{@render children?.()}</a>
{:else if "label" in props}
  {@const { label: _, ...extra } = props}
  <label bind:this={ref} class={className} {...extra}>{@render children?.()}</label>
{:else if "summary" in props}
  {@const { summary: _, ...extra } = props}
  <summary bind:this={ref} class={className} {...extra}>{@render children?.()}</summary>
{:else}
  <button bind:this={ref} type="button" class={className} {...props}>{@render children?.()}</button>
{/if}
