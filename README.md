# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Deploy (self-hosted on Projects2026)

Pushes to `main`/`master` run `.github/workflows/deploy.yaml`: check, build the image, push to GHCR, then SSH to the VPS and `docker compose up -d`.

One-time setup:

- Repo secrets: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `GHCR_READ_TOKEN` (PAT with `read:packages`). Repo variables: `APP_NAME` (`jawe-dev`), `APP_HOST` (the apex domain).
- On the VPS, in `~/Projects2026/apps/<APP_NAME>/` (the directory name must equal the `APP_NAME` variable), put `compose.yaml` and a `.env` copied from `.env.example`.
- DNS: A records for the apex and `www` pointing at the VPS. A wildcard does not cover the apex, and Let's Encrypt (HTTP-01) needs the record before the first request.

Cutover: lower the TTL, deploy and verify on a temporary host, switch the apex A record, wait for the certificate, then retire Vercel.

Rollback: `IMAGE=ghcr.io/<owner>/jawe.dev-v2:<old-sha> docker compose up -d` on the VPS.
