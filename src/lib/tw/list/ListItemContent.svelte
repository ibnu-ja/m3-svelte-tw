<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement> & { children?: Snippet };

	let { children, class: className, ...rest }: Props = $props();
</script>

<div
	class={["flex flex-col flex-1 min-w-0", className].filter(Boolean).join(" ")}
	{...rest}
>
	{@render children?.()}
</div>
