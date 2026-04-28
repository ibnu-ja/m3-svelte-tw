<script lang="ts" module>
	export const LIST_CTX = Symbol("list");

	export type ListContextType = {
		variant: "baseline" | "expressive";
		type: "standard" | "segmented";
		selectionMode: "none" | "single" | "multiple";
	};
</script>

<script lang="ts">
	import { setContext } from "svelte";
	import { cn } from "tailwind-variants";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = {
		type?: "standard" | "segmented";
		variant?: "baseline" | "expressive";
		selectionMode?: "none" | "single" | "multiple";
		class?: string;
		children?: Snippet;
	} & Omit<HTMLAttributes<HTMLDivElement>, "class">;

	let {
		type = "standard",
		variant = "baseline",
		selectionMode = "none",
		class: className,
		children,
		...rest
	}: Props = $props();

	const ctx: ListContextType = $state({ variant, type, selectionMode });
	setContext(LIST_CTX, ctx);

	$effect.pre(() => {
		ctx.variant = variant;
		ctx.type = type;
		ctx.selectionMode = selectionMode;
	});

	const listClass = $derived(
		type === "segmented"
			? cn("flex flex-col gap-0.5", className)
			: cn("flex flex-col", className),
	);
</script>

<div class={listClass} {...rest}>
	{@render children?.()}
</div>
