<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	export const LIST_ITEM_CTX = Symbol("list-item");

	export const listItemVariants = tv({
		base: "group flex w-full gap-3 px-4 text-left bg-surface text-on-surface [print-color-adjust:exact] data-[state=on]:bg-secondary-container data-[state=on]:rounded-lg",
		variants: {
			lines: {
				1: "h-d-14 py-2.5 items-center",
				2: "h-d-18 py-2.5 items-center",
				3: "h-d-22 py-2.5 items-start",
			},
			interactive: {
				true: "m3-layer cursor-pointer border-none disabled:text-translucent-on-surface-38 disabled:cursor-auto data-[state=on]:disabled:bg-translucent-on-surface-38",
				false: "",
			},
		},
		defaultVariants: { lines: 1, interactive: false },
	});

	export type ListItemLines = 1 | 2 | 3;
	export type ListItemContextType = {
		hasOverline: boolean;
		hasSupporting: boolean;
	};
	export type ListItemVariants = VariantProps<typeof listItemVariants>;
</script>

<script lang="ts">
	import { setContext } from "svelte";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import "$lib/etc/layer.js";

	type Props = {
		lines?: ListItemLines;
		interactive?: boolean;
		selected?: boolean;
		class?: string;
		children?: Snippet;
		href?: string | null;
	} & Omit<HTMLAttributes<HTMLElement>, "class">;

	let {
		lines = undefined,
		interactive = false,
		selected = false,
		class: className,
		children,
		href,
		onclick,
		...rest
	}: Props = $props();

	const ctx: ListItemContextType = $state({ hasOverline: false, hasSupporting: false });
	setContext(LIST_ITEM_CTX, ctx);

	const autoLines = $derived<ListItemLines>(
		ctx.hasOverline && ctx.hasSupporting ? 3 : ctx.hasOverline || ctx.hasSupporting ? 2 : 1,
	);
	const resolvedLines = $derived<ListItemLines>((lines ?? autoLines) as ListItemLines);

	const itemClass = $derived(
		listItemVariants({ lines: resolvedLines, interactive, class: className }),
	);

	const dataState = $derived(selected ? "on" : undefined);
</script>

{#if href}
	<a {href} class={itemClass} {onclick} data-state={dataState} {...rest}>
		{@render children?.()}
	</a>
{:else if onclick || interactive}
	<button type="button" class={itemClass} {onclick} data-state={dataState} {...rest}>
		{@render children?.()}
	</button>
{:else}
	<div class={itemClass} data-state={dataState} {...rest}>
		{@render children?.()}
	</div>
{/if}
