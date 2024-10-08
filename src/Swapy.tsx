import { createEffect, type JSX, mergeProps, onCleanup, onMount, type ParentProps, splitProps } from "solid-js";
import { createSwapy, type Swapy as ISwapy } from "swapy";

type SwapyFunction = typeof createSwapy;
type SwapyConfig = Parameters<SwapyFunction>[1];

type SwapCallback = Parameters<ISwapy["onSwap"]>[0];
type SwapEndCallback = Parameters<ISwapy["onSwapEnd"]>[0];
type SwapStartCallback = Parameters<ISwapy["onSwapStart"]>[0];

type SwapyEvents = {
  /** Callback that returns the underlying Swapy instance on creation */
  readonly onCreate: (s: Pick<ISwapy, "setData">, ref: HTMLDivElement) => void;
  readonly onSwap: SwapCallback;
  readonly onSwapEnd: SwapEndCallback;
  readonly onSwapStart: SwapStartCallback;
};

type Props = SwapyConfig &
  Partial<SwapyEvents> & {
    readonly class?: string;
    readonly style?: JSX.CSSProperties | string;
    /** Toggle whether Swapy is enabled/disabled (default: `true`)  */
    readonly enabled?: boolean;
  };

/**
 * ## Description
 *
 * The main component for `swapy-solid`. It is responsible for creating the underlying Swapy instance which in turn
 * creates a "drag-to-swap" layout. The swap areas are defined by any `<SwapySlot />` children provided to this parent
 * component container. Those very slots then contain their own `<SwapyItem />` child which can then be dragged, dropped
 * and swapped into any other slot in the container. Every slot must contain **only one** `<SwapyItem />` instance and
 * every item can use the optional `<SwapyHandle />` child component.
 *
 * ## Usage
 * ```tsx
 * import { Swapy, SwapyHandle, SwapyItem, SwapySlot } from "swapy-solid";
 *
 * <Swapy>
 *  <SwapySlot>
 *    <SwapyItem>Content or Component</SwapyItem>
 *  </SwapySlot>
 *  <SwapySlot slotId="unique-slot-id-1">
 *    <SwapyItem itemId="unique-item-id-1">
 *      <div>Content or Component</div>
 *      <SwapyHandle class="handle"/>
 *    </SwapyItem>
 *  </SwapySlot>
 * </Swapy>
 * ```
 */
const Swapy = (props: ParentProps<Props>) => {
  let containerRef!: HTMLDivElement;

  const _props = mergeProps({ enabled: true }, props);
  const [containerProps, swapyProps] = splitProps(_props, ["class", "style", "children"]);
  const [events, swapyConfigWithEnabled] = splitProps(swapyProps, ["onCreate", "onSwap", "onSwapEnd", "onSwapStart"]);
  const [toggle, swapyConfig] = splitProps(swapyConfigWithEnabled, ["enabled"]);

  onMount(() => {
    const swapy = createSwapy(containerRef, swapyConfig);
    events.onCreate?.(swapy, containerRef);

    if (events.onSwap) swapy.onSwap(events.onSwap);
    if (events.onSwapStart) swapy.onSwapStart(events.onSwapStart);
    if (events.onSwapEnd) swapy.onSwapEnd(events.onSwapEnd);

    createEffect(() => {
      swapy.enable(toggle.enabled);
    });

    onCleanup(() => {
      swapy.destroy();
    });
  });

  return <div ref={containerRef} {...containerProps} />;
};

export default Swapy;
