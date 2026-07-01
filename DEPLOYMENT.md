Deployment — cPanel Node.js App (manual zip upload)

This app runs on shakilhussain.dev via cPanel's "Setup Node.js App"
(Passenger), with `server.js` as the startup file.

## Deploying a new build

```bash
npm run package
```

This builds the app and produces `deploy.zip` at the project root —
usually just a few MB, since it ships a traced, minimal `node_modules`
(via Next.js `output: "standalone"` in `next.config.mjs`) instead of the
full one. Then:

1. Log into cPanel → File Manager → navigate to the app folder
   (e.g. `/home/shakilhu/portfolio`).
2. Upload `deploy.zip`.
3. Right-click it → Extract, overwrite existing files when prompted.
4. Delete the uploaded `deploy.zip` afterward to save space (it's not
   needed once extracted).
5. cPanel → "Setup Node.js App" → find this app → click **Restart**.
   (The zip also includes an updated `tmp/restart.txt`, which Passenger
   picks up on its own shortly after extraction — clicking Restart just
   makes it immediate.)

## Why this stays small

`output: "standalone"` traces only the files Next.js actually needs at
runtime into `.next/standalone/`, which `npm run package` zips up. A full
`node_modules` here is 450MB+ across 24,000+ files; the standalone
bundle is a few MB across ~1,100 files — the difference between
something you can upload in seconds versus minutes, and it avoids
eating into your hosting plan's storage quota.

## First-time cPanel setup (if the app doesn't exist yet)

1. cPanel → "Setup Node.js App" → Create Application.
2. Application root: the folder you'll extract `deploy.zip` into.
3. Application startup file: `server.js`.
4. Application URL: shakilhussain.dev.
5. Run `npm run package` locally, upload and extract as above, then
   Start the app from that same cPanel page.
