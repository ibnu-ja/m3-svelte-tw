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
		"m3-layer h-d-12 w-d-12 rounded-sm flex items-center justify-center shrink-0 cursor-pointer border-none bg-transparent [&>svg]:size-5 [&>svg]:shrink-0 text-on-surface-variant",
		className,
	)}
	{...rest}
>
	{@render children?.()}
</button>
