import { createUniqueId, type JSX } from "solid-js";

type SlotProps = JSX.HTMLAttributes<HTMLDivElement> & {
  /** The unique id of the slot. If no id is provided, a unique one will be generated */
  readonly slotId?: string;
  readonly children: JSX.Element;
};

/**
 * ## Description
 *
 * The `<SwapySlot />` component is used to define a drag and drop slot within its parent `<Swapy />` container. This
 * component must contain **one** `<SwapyItem />` child. You can customize the slot you are currently selecting by styling
 * `[data-swapy-highlighted]` in your CSS.
 *
 * *Note*: Swapy requires that each slot have a unique id. If no id is provided, a unique one will be generated via the
 * SolidJS API `createUniqueId()`.
 *
 * ## Usage
 *
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
 *      <SwapyHandle class="handle" />
 *    </SwapyItem>
 *  </SwapySlot>
 * </Swapy>
 */
const SwapySlot = (props: SlotProps) => {
  const slotId = () => props.slotId ?? createUniqueId();
  return <div data-swapy-slot={slotId()} {...props} />;
};

export default SwapySlot;
