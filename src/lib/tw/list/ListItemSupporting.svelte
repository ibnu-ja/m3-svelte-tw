<script lang="ts">
	import { cn } from "tailwind-variants";
	import { getContext } from "svelte";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { LIST_ITEM_CTX, type ListItemContextType } from "./ListItem.svelte";

	type Props = HTMLAttributes<HTMLSpanElement> & { children?: Snippet };

	let { children, class: className, ...rest }: Props = $props();

	const ctx = getContext<ListItemContextType>(LIST_ITEM_CTX);

	$effect.pre(() => {
		ctx.hasSupporting = true;
		return () => {
			ctx.hasSupporting = false;
		};
	});

	const clampClass = $derived(
		ctx.resolvedLines === 1 ? "hidden" :
		ctx.resolvedLines === 2 ? "line-clamp-1" :
		ctx.hasOverline ? "line-clamp-1" : "line-clamp-2",
	);
</script>

<span
	class={cn(
		"font-body-medium text-on-surface-variant group-data-[state=on]:text-on-secondary-container group-disabled:text-translucent-on-surface-38",
		clampClass,
		className,
	)}
	{...rest}
>
	{@render children?.()}
</span>
