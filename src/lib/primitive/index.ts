import type { Component, Snippet } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";
import type { ClassValue } from "clsx";

type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};

type AsTag = keyof RemoveIndexSignature<SvelteHTMLElements>;

export type PrimitiveProps = {
  class?: ClassValue;
  asChild?: boolean;
  //		DynamicComponent: Component<{ prop: string }>; idk, i cannot read docs
  as?: AsTag | ConstructorOfATypedSvelteComponent | Component<any, any, any> | null;
  children?: Snippet;
  [key: string]: any; // rest props
};
