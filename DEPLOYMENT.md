Deployment — cPanel Node.js App (automated via GitHub Actions)

This repo deploys automatically to shakilhussain.dev on every push to `main`
via `.github/workflows/deploy.yml`. No more manual zip/upload.

## How it works

1. GitHub Actions checks out the repo, runs `npm ci && npm run build`.
2. The build output (`.next/`, `public/`, `package.json`, `server.js`, etc.)
   is rsynced over SSH to the app directory on the server.
   `node_modules/` is excluded — it's reinstalled on the server so native
   dependencies match the server's architecture.
3. Over the same SSH connection, the workflow activates the app's Node
   virtual environment, runs `npm install --omit=dev`, and touches
   `tmp/restart.txt` so Passenger (cPanel's Node.js app manager) restarts
   the app with the new code.

## One-time setup (do this once)

### 1. Confirm the app exists in cPanel → "Setup Node.js App"

You should already have an app pointed at shakilhussain.dev with
`server.js` as the startup file (this is why that file exists in the repo).
Open that app's page in cPanel and copy two things:

- **Application root** — absolute path, e.g. `/home/username/nodeapp`
- **Enter to the virtual environment** command — a `source .../bin/activate`
  line shown on that page.

### 2. Generate a dedicated deploy SSH key (on your own machine, not in chat)

```bash
ssh-keygen -t ed25519 -f ~/.ssh/cpanel_deploy -C "github-actions-deploy" -N ""
```

Add the **public** key (`cpanel_deploy.pub`) to the server: cPanel →
"SSH Access" → "Manage SSH Keys" → Import Key, then Authorize it.

### 3. Add GitHub repository secrets

In GitHub: Settings → Secrets and variables → Actions → New repository
secret. Add these (paste values directly into GitHub's UI — never share
the private key in chat or anywhere else):

| Secret | Value |
|---|---|
| `CPANEL_SSH_HOST` | Your server hostname or IP |
| `CPANEL_SSH_PORT` | SSH port (often `22`, sometimes a custom port like `21098`) |
| `CPANEL_SSH_USERNAME` | Your cPanel username |
| `CPANEL_SSH_KEY` | Contents of the **private** key file (`cat ~/.ssh/cpanel_deploy`) |
| `CPANEL_APP_PATH` | Application root from step 1, e.g. `/home/username/nodeapp` |
| `CPANEL_NODE_VENV_ACTIVATE` | Full path to the venv's `activate` script, e.g. `/home/username/nodevenv/nodeapp/20/bin/activate` |

### 4. Push to main

That's it — every push to `main` now builds and deploys automatically.
Check progress under the repo's "Actions" tab. If a deploy fails, the
logs will show which step (rsync or SSH restart) failed.

## Manual deploy (fallback)

If you ever need to trigger a deploy without pushing new code, go to the
"Actions" tab → "Deploy to cPanel" → "Run workflow".
