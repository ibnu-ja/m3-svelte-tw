<script lang="ts">
	import { cn } from "tailwind-variants";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement> & { children?: Snippet };

	let { children, class: className, ...rest }: Props = $props();
</script>

<div class={cn("flex flex-col flex-1 min-w-0", className)} {...rest}>
	{@render children?.()}
</div>
