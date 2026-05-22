Deployment — Vercel (recommended)

Quick steps to deploy your Next.js portfolio to a trusted free host (Vercel):

1. Create a GitHub repository and push this project to it.
2. Sign in at https://vercel.com using GitHub and click “Import Project”.
3. Select your repository. Vercel will auto-detect Next.js.
4. Click "Deploy". When finished you'll get a `*.vercel.app` URL you can share.

Vercel CLI (deploy from your machine):

```bash
# Install (if needed)
npm i -g vercel

# Deploy (follow interactive prompts)
vercel

# Promote a deploy to production
vercel --prod
```

Notes:
- Vercel automatically builds on pushes to the connected branch (e.g., `main`).
- Netlify can also host Next.js but may need extra config for the App Router; Vercel is simplest.

If you want, I can:
- Provide the exact `git` commands to create a GitHub repo and push this project.
- Walk you through connecting Vercel step-by-step.
