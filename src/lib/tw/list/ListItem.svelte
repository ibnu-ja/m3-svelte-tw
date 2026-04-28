<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	export const LIST_ITEM_CTX = Symbol("list-item");

	export const listItemVariants = tv({
		base: "flex w-full gap-4 px-4 text-left bg-transparent text-on-surface [print-color-adjust:exact] outline-none",
		variants: {
			lines: {
				1: "min-h-d-14 py-2 items-center",
				2: "min-h-d-18 py-2 items-center",
				3: "min-h-d-22 py-3 items-start",
			},
			interactive: {
				true: "m3-layer cursor-pointer border-none disabled:opacity-38 disabled:cursor-auto",
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
		class?: string;
		children?: Snippet;
		href?: string | null;
	} & Omit<HTMLAttributes<HTMLElement>, "class">;

	let {
		lines = undefined,
		interactive = false,
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
</script>

{#if href}
	<a {href} class={itemClass} {onclick} {...rest}>
		{@render children?.()}
	</a>
{:else if onclick || interactive}
	<button type="button" class={itemClass} {onclick} {...rest}>
		{@render children?.()}
	</button>
{:else}
	<div class={itemClass} {...rest}>
		{@render children?.()}
	</div>
{/if}
