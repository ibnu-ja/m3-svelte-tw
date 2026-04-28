<script lang="ts">
	import { cn } from "tailwind-variants";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement> & { children?: Snippet };

	let { children, class: className, ...rest }: Props = $props();
</script>

<div
	class={cn(
		"flex flex-col items-end shrink-0 gap-1 text-on-surface-variant font-label-small [&>svg]:size-6 [&>svg]:shrink-0 group-data-[state=on]:text-on-secondary-container group-disabled:opacity-38",
		className,
	)}
	{...rest}
>
	{@render children?.()}
</div>
