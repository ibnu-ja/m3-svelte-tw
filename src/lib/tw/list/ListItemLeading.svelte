<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement> & { children?: Snippet };

	let { children, class: className, ...rest }: Props = $props();
</script>

<div
	class={[
		"flex items-center shrink-0 text-on-surface-variant [&>svg]:size-6 [&>svg]:shrink-0",
		className,
	]
		.filter(Boolean)
		.join(" ")}
	{...rest}
>
	{@render children?.()}
</div>
