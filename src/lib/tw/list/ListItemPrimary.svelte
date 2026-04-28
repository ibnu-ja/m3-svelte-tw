<script lang="ts">
	import { cn } from "tailwind-variants";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import "$lib/etc/layer.js";

	type Props = Omit<HTMLButtonAttributes, "class"> & {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className, ...rest }: Props = $props();
</script>

<button
	type="button"
	class={cn(
		"m3-layer flex flex-1 items-center gap-3 text-left cursor-pointer border-none bg-transparent min-h-full",
		className,
	)}
	{...rest}
>
	{@render children?.()}
</button>
