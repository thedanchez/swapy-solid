import type { JSX } from "solid-js";

type HandleProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "style">;

/**
 * ## Description
 *
 * The `<SwapyHandle />` component is used to define where users can drag a `<SwapyItem />` from. It **must** be a direct
 * child of a `<SwapyItem />` element -- it is also entirely optional to use. If no handle is used within an item, you can
 * drag the item from anywhere within its slot. But if a handle is used, then you can only drag the item via dragging
 * said handle.
 *
 * *Note*: It is on you to style and position the handle via CSS as you see fit. Swapy configures all `<SwapyItem />`
 * elements with `position: relative` by default via inline `style`, so you can use `position: absolute` on the handle
 * to position it within the item along with any other visual modifications.
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
const SwapyHandle = (props: HandleProps) => <div data-swapy-handle {...props} />;

export default SwapyHandle;
