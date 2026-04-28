<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	export const LIST_ITEM_CTX = Symbol("list-item");

	export const listItemVariants = tv({
		base: "group flex w-full gap-3 px-4 text-left text-on-surface [print-color-adjust:exact] data-[state=on]:bg-secondary-container data-[state=on]:rounded-lg",
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
			variant: {
				baseline: "rounded-none",
				expressive: "rounded-xs hover:rounded-md focus:rounded-lg active:rounded-lg transition-[border-radius] ease-m3-spatial duration-m3-spatial",
			},
			listType: {
				standard: "bg-surface",
				segmented: "bg-surface-container-highest",
			},
		},
		defaultVariants: { lines: 1, interactive: false, variant: "baseline", listType: "standard" },
	});

	export type ListItemLines = 1 | 2 | 3;
	export type ListItemContextType = {
		hasOverline: boolean;
		hasSupporting: boolean;
		resolvedLines: ListItemLines;
		variant: "baseline" | "expressive";
	};
	export type ListItemVariants = VariantProps<typeof listItemVariants>;
</script>

<script lang="ts">
	import { setContext, getContext } from "svelte";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "tailwind-variants";
	import "$lib/etc/layer.js";
	import { LIST_CTX, type ListContextType } from "./List.svelte";

	type Props = {
		lines?: ListItemLines;
		interactive?: boolean;
		selected?: boolean;
		variant?: "baseline" | "expressive";
		class?: string;
		children?: Snippet;
		href?: string | null;
	} & Omit<HTMLAttributes<HTMLElement>, "class">;

	const listCtx = getContext<ListContextType | undefined>(LIST_CTX);

	let {
		lines = undefined,
		interactive = false,
		selected = false,
		variant: variantProp = undefined as ("baseline" | "expressive" | undefined),
		class: className,
		children,
		href,
		onclick,
		...rest
	}: Props = $props();

	const ctx: ListItemContextType = $state({ hasOverline: false, hasSupporting: false, resolvedLines: 1, variant: "baseline" });
	setContext(LIST_ITEM_CTX, ctx);

	const autoLines = $derived<ListItemLines>(
		ctx.hasOverline && ctx.hasSupporting ? 3 : ctx.hasOverline || ctx.hasSupporting ? 2 : 1,
	);
	const resolvedLines = $derived<ListItemLines>((lines ?? autoLines) as ListItemLines);
	const variant = $derived<"baseline" | "expressive">(variantProp ?? listCtx?.variant ?? "baseline");
	const listType = $derived<"standard" | "segmented">(listCtx?.type ?? "standard");
	// Positional corner shaping for segmented — bg is handled by the listType TV variant
	const segmentedShapeClass = $derived(
		listType === "segmented" ? "rounded-xs first:rounded-t-lg last:rounded-b-lg" : "",
	);

	$effect.pre(() => {
		ctx.resolvedLines = resolvedLines;
		ctx.variant = variant;
	});

	const itemClass = $derived(
		listItemVariants({ lines: resolvedLines, interactive, variant, listType, class: cn(segmentedShapeClass, className) }),
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
