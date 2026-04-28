<script lang="ts">
	import { cn } from "tailwind-variants";
	import { getContext } from "svelte";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { LIST_ITEM_CTX, type ListItemContextType } from "./ListItem.svelte";

	type Props = HTMLAttributes<HTMLDivElement> & { children?: Snippet };

	let { children, class: className, ...rest }: Props = $props();

	const ctx = getContext<ListItemContextType | undefined>(LIST_ITEM_CTX);
	const isExpressive = $derived(ctx?.variant === "expressive");
</script>

<div
	class={cn(
		"flex flex-col items-end shrink-0 gap-1 text-on-surface-variant font-label-small [&>svg]:shrink-0 group-data-[state=on]:text-on-secondary-container group-disabled:opacity-38",
		isExpressive ? "[&>svg]:size-5" : "[&>svg]:size-6",
		className,
	)}
	{...rest}
>
	{@render children?.()}
</div>
