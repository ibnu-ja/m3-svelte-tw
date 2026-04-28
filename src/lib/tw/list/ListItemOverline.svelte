<script lang="ts">
	import { getContext } from "svelte";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { LIST_ITEM_CTX, type ListItemContextType } from "./ListItem.svelte";

	type Props = HTMLAttributes<HTMLSpanElement> & { children?: Snippet };

	let { children, class: className, ...rest }: Props = $props();

	const ctx = getContext<ListItemContextType>(LIST_ITEM_CTX);

	$effect.pre(() => {
		ctx.hasOverline = true;
		return () => {
			ctx.hasOverline = false;
		};
	});
</script>

<span
	class={["font-label-small text-on-surface-variant", className].filter(Boolean).join(" ")}
	{...rest}
>
	{@render children?.()}
</span>
