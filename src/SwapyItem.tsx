import { createUniqueId, type JSX } from "solid-js";

// Swapy already assigns a `style` on the SwapyItem element and any additional `style` props will be ignored.
type ItemProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "style"> & {
  /** The unique id of the item. If no id is provided, a unique one will be generated */
  readonly itemId?: string;
};

/**
 * ## Description
 *
 * The `<SwapyItem />` component is used to define an draggable/droppable item within a `<SwapySlot />` container. Swapy
 * items are what get dragged/dropped into Swapy slots.
 *
 * *Note*: Swapy requires that each item have a unique id. If no id is provided, a unique one will be generated via the
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
const SwapyItem = (props: ItemProps) => {
  const itemId = () => props.itemId ?? createUniqueId();
  return <div data-swapy-item={itemId()} {...props} />;
};

export default SwapyItem;
