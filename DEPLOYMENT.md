Deployment — cPanel Node.js App (automated via GitHub Actions)

This repo deploys automatically to shakilhussain.dev on every push to `main`
via `.github/workflows/deploy.yml`. No more manual zip/upload.

## How it works

Your hosting plan doesn't expose SSH, so the workflow deploys over FTPS
(FTP with TLS encryption) instead:

1. GitHub Actions checks out the repo, runs `npm ci && npm run build`.
2. `npm prune --omit=dev` strips devDependencies out of `node_modules`,
   since there's no shell on the server to run `npm install` remotely —
   the full production `node_modules` has to be shipped as part of the
   upload.
3. A `tmp/restart.txt` file is written with the current timestamp.
   Passenger (cPanel's Node.js app manager) restarts the app whenever
   this file's contents change, so this is what triggers the restart.
4. Everything (`.next/`, `public/`, `node_modules/`, `package.json`,
   `server.js`, etc.) is uploaded over FTPS to the app directory. Only
   changed files are re-uploaded on each run, so after the first deploy
   subsequent ones are much faster.

## One-time setup (do this once)

### 1. Create a dedicated FTP account scoped to this folder

Don't use your main cPanel login for this. In cPanel → "FTP Accounts",
create a new account with home directory locked to the app folder shown
in your File Manager (e.g. `/home/shakilhu/portfolio`). This way, if the
credential ever leaks, the blast radius is limited to that one folder.

Note the account's login (usually `ftpuser@shakilhussain.dev`) and
password, and the directory path it's scoped to.

### 2. Confirm the app in cPanel → "Setup Node.js App"

Startup file should be `server.js` (already in this repo). Note the
**Application root** shown there — it should match the FTP account's
directory from step 1.

### 3. Add GitHub repository secrets

In GitHub: Settings → Secrets and variables → Actions → New repository
secret. Add these (paste values directly into GitHub's UI — never share
passwords in chat or anywhere else):

| Secret | Value |
|---|---|
| `FTP_SERVER` | Your server hostname, e.g. `nova.hostseba.com` (also try `ftp.shakilhussain.dev`) |
| `FTP_USERNAME` | The dedicated FTP account's username from step 1 |
| `FTP_PASSWORD` | The dedicated FTP account's password |
| `FTP_SERVER_DIR` | Remote path to upload into, e.g. `/home/shakilhu/portfolio/` |

### 4. Push to main

That's it — every push to `main` now builds and deploys automatically.
Check progress under the repo's "Actions" tab. The first run uploads
everything (slow, node_modules included); later runs only send changed
files.

## Limitation vs. SSH-based deploy

Without shell access, dependency installs happen in CI and are shipped
as files rather than installed natively on the server. This works as
long as the server and GitHub's runners are the same architecture
(both are standard 64-bit Linux, which is true for the vast majority of
cPanel hosts), but if you ever see native-module errors after a deploy,
that mismatch is the likely cause — the fix at that point is asking
hostseba to enable SSH access, then switching back to an SSH+rsync
based workflow.

## Manual deploy (fallback)

If you ever need to trigger a deploy without pushing new code, go to the
"Actions" tab → "Deploy to cPanel" → "Run workflow".
