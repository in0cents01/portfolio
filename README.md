# portfolio

A React + Vite + Tailwind CSS v4 portfolio app, built inside Figma Make.

## Prerequisites

- **Node.js 22** (pinned in `.mise.toml`)
- **pnpm 10.34.3** (or newer)

If you have [mise](https://mise.jdx.dev/) installed, run this from the project directory to install the pinned versions automatically:

```bash
mise install
```

Otherwise, install Node 22 and pnpm manually, then verify:

```bash
node -v   # v22.x
pnpm -v   # 10.34.3 (or newer)
```

## Ubuntu setup (no sudo required)

Verified on **Ubuntu 26.04 LTS**. Ubuntu's `node` package is often an old version and `npm install -g` needs `sudo`, so use the steps below instead.

### 1. Install Node.js 22 (via NodeSource)

Skip this if `node -v` already reports v22.x.

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # v22.x
```

Alternative without touching apt: install [nvm](https://github.com/nvm-sh/nvm), then `nvm install 22 && nvm use 22`.

### 2. Install pnpm

`corepack` ships with Node, but `corepack enable` writes to `/usr/bin` and therefore needs `sudo`. The no-sudo option is the official standalone installer, which puts pnpm in `~/.local/share/pnpm` and updates `~/.zshrc` (or `~/.bashrc`):

```bash
curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=10.34.3 sh -
source ~/.zshrc        # or: source ~/.bashrc
pnpm -v                # 10.34.3
```

If you do have `sudo`, the shorter route is:

```bash
sudo corepack enable
sudo corepack prepare pnpm@10.34.3 --activate
```

Verify the install location is on your `PATH`:

```bash
which pnpm   # ~/.local/share/pnpm/pnpm
```

### 3. Install project dependencies

```bash
cd ~/myPortfolio/portfolio/Portfolio
pnpm install
```

### 4. Start the dev server

```bash
pnpm dev
```

Then open **http://localhost:8443**.

If the port is already taken (for example a Figma Make-managed server is already running), either use it as-is or pick another port:

```bash
PORT=3000 pnpm dev
```

## Step-by-step: run the project

### 1. Open the project directory

```bash
cd portfolio/Portfolio
```

### 2. Install dependencies (first time only)

`node_modules` is usually already present. If it's missing, or if `pnpm-lock.yaml` changed, run:

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

This starts Vite with hot reload on **http://localhost:8443**.

- The port is fixed via `strictPort: true`; to use a different port, set the `PORT` environment variable before starting:

  ```bash
  PORT=3000 pnpm dev
  ```

- The server binds to `0.0.0.0` by default, so it's reachable from other devices on your network as well.

### 4. Open the app

Visit **http://localhost:8443** in your browser. Any edit to `src/` is reflected immediately — no restart needed.

### 5. Stop the server

Press `Ctrl+C` in the terminal where `pnpm dev` is running.

## Other commands

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `pnpm build`    | Production build into `dist/`                 |
| `pnpm preview`  | Serve the production build locally            |
| `pnpm format`   | Format the codebase with oxfmt                |

## Project structure

- `src/main.tsx` — React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into `#root`
- `src/App.tsx` — Main application component and the usual starting point for UI work
- `src/index.css` — Global CSS entrypoint; imports Tailwind CSS v4
- `index.html` — Vite HTML shell with the `#root` element
- `vite.config.ts` — Vite config: React, Tailwind v4, Figma Make plugins, `@` → `src` alias
- `.mise.toml` — Pinned toolchain versions (Node 22, pnpm 10.34.3)

## Troubleshooting (Ubuntu)

- **`pnpm: command not found`** — the installer edited `~/.zshrc`/`~/.bashrc`; open a new terminal or run `source ~/.zshrc`.
- **`EACCES: permission denied, symlink ... /usr/bin/pnpm`** — `corepack enable` needs root; use the standalone installer above, or prefix it with `sudo`.
- **`Permission denied` on `npm install -g`** — npm's global prefix is root-owned on Ubuntu; use the standalone pnpm installer instead.
- **`Port 8443 is already in use`** — something is already serving (Figma Make, or an earlier `pnpm dev`). Check with `ss -ltnp | grep 8443`, then either use that server or start on another port with `PORT=3000 pnpm dev`.

## Notes

- This scaffold targets **Figma Make**. Inside Figma Make a dev server is already started for you on `$PORT` (default `8443`), so you don't need to run `pnpm dev` manually.
- `src/index.css` uses `@import 'tailwindcss';` — use Tailwind utility classes directly in JSX and put global styles in `@layer base { ... }`.
- No Tailwind config file or PostCSS config is needed.
