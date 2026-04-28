<script lang="ts">
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
</script>

<span
	class={["font-body-medium text-on-surface-variant", className].filter(Boolean).join(" ")}
	{...rest}
>
	{@render children?.()}
</span>
