import { mount, unmount } from "svelte";
import type { Attachment } from 'svelte/attachments';
import Layer from "./Layer.svelte";

export function ripple(): Attachment {
  return (element: Element) => {
    const firstChild = element.firstChild ?? undefined;
    const layerInstance = mount(Layer, {
      target: element,
      anchor: firstChild
    });

    return async () => {
      await unmount(layerInstance);
    };
  };
}