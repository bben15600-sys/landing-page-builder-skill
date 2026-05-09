# Deployment — GitHub + Vercel

The template includes a complete GitHub Actions workflow for automatic deployment to Vercel on every push.

## Initial Setup (one-time per project)

### 1. Push project to GitHub

```bash
git init
git add -A
git commit -m "feat: initial site for <BRAND_NAME>"
gh repo create <NAME> --private --source=. --push   # or manual
```

### 2. Link Vercel project

Option A — via Vercel CLI (one-shot to create project):
```bash
npx vercel link --yes
```
This creates `.vercel/project.json` with `orgId` and `projectId`. **Do not commit this directory** — it's in .gitignore.

Option B — via Vercel dashboard:
1. https://vercel.com/new → Import `<NAME>` repo
2. Build settings: defaults are fine (Next.js auto-detected)
3. Deploy → copy the URLs

### 3. Add GitHub Secrets

In the GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**

| Secret name | How to obtain |
|---|---|
| `VERCEL_TOKEN` | https://vercel.com/account/tokens → Create Token (no expiry, scope: full account) |
| `VERCEL_ORG_ID` | Look in `.vercel/project.json` → `orgId` field |
| `VERCEL_PROJECT_ID` | Look in `.vercel/project.json` → `projectId` field |

### 4. Workflow Permissions

The workflow needs `contents: write` permission to comment deployment URLs on commits. Already set in the template:

```yaml
permissions:
  contents: write
```

If this fails (403 error in the "Comment" step), you may need to also enable in GitHub repo Settings → Actions → General → Workflow permissions → Read and write permissions.

## How the Workflow Works

`.github/workflows/deploy.yml`:

- **Triggers**: push to `main` (production) or any `claude/**` branch (preview)
- **Steps**:
  1. Checkout
  2. Setup Node 20 + npm cache
  3. Install Vercel CLI
  4. `vercel pull` — fetch project settings
  5. `vercel build` — build the project
  6. `vercel deploy --prebuilt` — upload prebuilt artifacts
  7. Comment URL on the commit

For `main` branch: passes `--prod` (overwrites production URL).
For other branches: creates preview deployment.

## Production URL

After first successful deploy, your site is live at:
- `https://<project-name>.vercel.app` (auto-aliased from production deploys)
- Or your custom domain (if connected via Vercel dashboard)

## Custom Domain

In Vercel dashboard: **Project → Domains → Add**

Common DNS records:
- A record: `76.76.21.21`
- CNAME for `www`: `cname.vercel-dns.com`

Vercel auto-issues Let's Encrypt SSL certs. Wait ~30 minutes for DNS propagation.

## Cache-Busting OG Images

When you change the OG image, WhatsApp/Facebook/Twitter aggressively cache the previous version. To force a refresh:

1. **Bump version param** in `app/layout.tsx`:
   ```ts
   images: [{ url: "/og.png?v=2" }],   // change v=N
   ```
2. **Use Facebook Debugger** to force re-scrape:
   https://developers.facebook.com/tools/debug/?q=https://your-domain
   → Click "Scrape Again"
3. **Share to a fresh chat** that has never seen the URL.

## Environment Variables

To set production env vars (e.g. `NEXT_PUBLIC_SITE_URL` for canonical URL):

Vercel dashboard → Project → Settings → Environment Variables.

Or via CLI:
```bash
vercel env add NEXT_PUBLIC_SITE_URL production
```

## Verifying Deployment

After push, monitor at:
- GitHub Actions: `https://github.com/<owner>/<repo>/actions`
- Vercel: `https://vercel.com/<team>/<project>/deployments`

Both should show success within 1-3 minutes.

## Common Failures & Fixes

### "Resource not accessible by integration"
The workflow's `actions/github-script@v7` step failed to comment.
**Fix**: Add `permissions: { contents: write }` at workflow root (already in template).

### "Could not retrieve Project Settings"
`.vercel/project.json` is missing or `VERCEL_PROJECT_ID` secret is wrong.
**Fix**: Run `vercel link --yes` locally and copy the IDs to GitHub Secrets.

### "Hobby plan limitation: commits not by team owner"
Vercel rejects deploys when the commit author doesn't match the team owner's email.
**Fix**: Either add the contributor as team member (Pro plan), OR rewrite git commit author:
```bash
git commit --amend --author="Owner Name <owner@email.com>" --no-edit
git push --force
```

### Build fails with TypeScript errors
Always run `npm run build` locally before pushing.

## Rollback

If a deploy breaks production:

1. Vercel dashboard → Deployments → previous green deploy → "Promote to Production"
2. Or via CLI: `vercel rollback <deployment-url>`

## Monitoring

Useful integrations:
- **Vercel Analytics** — built in, just enable in dashboard
- **Google Analytics** — add `NEXT_PUBLIC_GA_ID` env var + script tag in layout.tsx
- **Plausible** — privacy-friendly alternative

## SEO Submission

After first prod deploy:
1. Submit sitemap to Google Search Console: `https://your-domain/sitemap.xml`
2. Verify ownership via DNS or HTML tag
3. Setup Google Business Profile (critical for local search)
