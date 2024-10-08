# Swapy Solid

This library provides a set of Solid components that streamline using [Swapy](https://swapy.tahazsh.com/) in your Solid applications. It exposes the Swapy API in declarative JSX form and provides a reactive enable/disable toggle when needed.

# Installation

Both `solid-js` and `swapy` are peer dependencies of `swapy-solid`.

```bash
npm install solid-js swapy swapy-solid
pnpm add solid-js swapy swapy-solid
yarn add solid-js swapy swapy-solid
bun add solid-js swapy swapy-solid
```

## Usage

This library exports four components: `<Swapy />`, `<SwapySlot />`, `<SwapyItem />` and `<SwapyHandle />`.

The main `<Swapy />` component exposes the Swapy API configuration props to use at your discretion. The direct children of `<Swapy />` are instances of `<SwapySlot />` and every slot **must have one** `<SwapyItem />` child. Lastly, the `<SwapyHandle />` component is completely optional to use and can only be used as a direct child of `<SwapyItem />`.

Swapy requires all slots and items to have unique id values assigned to them. The `<SwapySlot />` and `<SwapyItem />` components do away with the need for you to manually assign unique ids via use of [createUniqueId](https://docs.solidjs.com/reference/component-apis/create-unique-id) under the hood. However, if you would like to provide your own custom ids, that is supported via the optional `slotId` and `itemId` props respectively.

```tsx
import { Swapy, SwapyHandle, SwapyItem, SwapySlot } from "swapy-solid";

<Swapy>
  <SwapySlot>
    <SwapyItem>Content or Component</SwapyItem>
  </SwapySlot>
  <SwapySlot slotId="unique-slot-id-1">
    <SwapyItem itemId="unique-item-id-1">
      <div>Content or Component</div>
      <SwapyHandle class="handle" />
    </SwapyItem>
  </SwapySlot>
</Swapy>;
```

Furthermore on the optional `<SwapyHandle />` component, it is entirely up to you to style and position it via CSS as you see fit. Swapy injects inline styles like `position: relative` on the `<SwapyItem />` elements by default so you are free to apply `position: absolute` on your `<SwapyHandle />` instances along with any other visual treatments you want to have.

## Getting Started

Some pre-requisites before install dependencies:

- Install Node Version Manager (NVM)
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  ```
- Install Bun
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

### Installing Dependencies

```bash
nvm use
bun install
```

### Local Development Build

```bash
bun start
```

### Linting & Formatting

```bash
bun run lint    # checks source for lint violations
bun run format  # checks source for format violations

bun run lint:fix    # fixes lint violations
bun run format:fix  # fixes format violations
```

### Unit Testing

> We use [Solid Testing Library](https://github.com/solidjs/solid-testing-library) for integration style unit tests

```bash
bun run test
bun run test:cov  # with test coverage
```

### Contributing

The only requirements when contributing are:

- You keep a clean git history in your branch
  - rebasing `main` instead of making merge commits.
- Using proper commit message formats that adhere to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - Additionally, squashing (via rebase) commits that are not [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- CI checks pass before merging into `main`
