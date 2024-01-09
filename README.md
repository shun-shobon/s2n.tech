# [s2n.tech](https://s2n.tech)

![](./public/og-image.png)

My personal portfolio website.

## Development

### Prerequisites

- Node.js (The version is specified in `.tool-versions`. We recommend using asdf or rtx to manage the version of Node.js.)
- pnpm (The version is specified in `package.json#packageManager`. We recommend using corepack to manage the version of package managers.)

### Tech stack

- TypeScript
- Astro
- vanilla-extract
- Cloudflare Pages
- ESLint
- Prettier
- GitHub Actions
- Renovate

### Setup

```sh
pnpm install
```

### Development server

```sh
pnpm dev
```

The development server will be running at http://localhost:4321.

### Build

```sh
pnpm build
```

### Type check

```sh
pnpm type-check
```

### Lint

```sh
pnpm lint
```

You can fix some errors automatically by running the following command:

```sh
pnpm lint:fix
```

### Format

```sh
pnpm format
```

You can check if there are any formatting errors by running the following command:

```sh
pnpm format:check
```
