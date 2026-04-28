<script lang="ts">
	import { cn } from "tailwind-variants";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLSpanElement> & { children?: Snippet };

	let { children, class: className, ...rest }: Props = $props();
</script>

<span
	class={cn(
		"font-body-large text-on-surface truncate group-data-[state=on]:text-on-secondary-container group-disabled:text-translucent-on-surface-38",
		className,
	)}
	{...rest}
>
	{@render children?.()}
</span>
