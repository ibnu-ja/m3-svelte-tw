import type { Component, Snippet } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};

type AsTag = keyof RemoveIndexSignature<SvelteHTMLElements>;

export type PrimitiveProps = {
  asChild?: boolean;
  //		DynamicComponent: Component<{ prop: string }>; idk, i cannot read docs
  as?: AsTag | ConstructorOfATypedSvelteComponent | Component<any, any, any> | null;
  children?: Snippet;
  [key: string]: any; // rest props
};
