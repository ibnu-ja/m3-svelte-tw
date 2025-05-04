export const internalBottomSheetContextKey = Symbol('internalBottomSheetContext');

export type BottomSheetContext = {
  startY: number;
  isDragging: boolean;
  containerHeightSignal: number | undefined;
}

export { default as BottomSheet } from './BottomSheet.svelte'

export { default as BottomSheetContainer } from './BottomSheetContainer.svelte'

export { default as BottomSheetHandle } from './BottomSheetHandle.svelte'

export { default as BottomSheetHandleContainer } from './BottomSheetHandleContainer.svelte'
