import { Swapy, SwapyHandle, SwapyItem, SwapySlot } from "../dist";

export const App = () => {
  return (
    <Swapy style={{ display: "grid", "grid-template-columns": "1fr 1fr 1fr" }}>
      <SwapySlot style={{ background: "green" }}>
        <SwapyItem>Foo</SwapyItem>
      </SwapySlot>
      <SwapySlot style={{ background: "white" }}>
        <SwapyItem class="item">
          Bar
          <SwapyHandle class="handle" />
        </SwapyItem>
      </SwapySlot>
      <SwapySlot style={{ background: "blue" }}>
        <SwapyItem>Baz</SwapyItem>
      </SwapySlot>
    </Swapy>
  );
};
