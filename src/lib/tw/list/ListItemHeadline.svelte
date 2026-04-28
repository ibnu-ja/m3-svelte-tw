<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLSpanElement> & { children?: Snippet };

	let { children, class: className, ...rest }: Props = $props();
</script>

<span
	class={["font-body-large text-on-surface truncate", className].filter(Boolean).join(" ")}
	{...rest}
>
	{@render children?.()}
</span>
