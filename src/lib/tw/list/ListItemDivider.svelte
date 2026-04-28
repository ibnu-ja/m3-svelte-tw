<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLHRElement>;

	let { class: className, ...rest }: Props = $props();
</script>

<hr
	class={["border-0 h-px bg-outline-variant m-0", className].filter(Boolean).join(" ")}
	{...rest}
/>
