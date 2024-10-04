# Template: SolidJS Library

Template for [SolidJS](https://www.solidjs.com/) library package. Bundling of the library is managed by [tsup](https://tsup.egoist.dev/).

Other things configured include:

- Bun (for dependency management and running scripts)
- TypeScript
- ESLint / Prettier
- Solid Testing Library + Vitest (for testing)
- GitHub Actions (for all CI/CD)

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
