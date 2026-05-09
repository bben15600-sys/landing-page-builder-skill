# Troubleshooting

Common issues encountered while building or deploying sites from this template.

## Build Errors

### "Type error: Expression produces a union type that is too complex to represent"

**Cause**: Polymorphic `as` prop on `<Reveal>` component creates exponential type union.
**Fix**: Don't use `<Reveal as="li">`. Wrap children in plain divs, the Reveal stays as `div`:
```tsx
<li>
  <Reveal variant="up" delay={i * 60}>
    <div className="...">{content}</div>
  </Reveal>
</li>
```

### "Module not found: lucide-react"

**Fix**: `npm install lucide-react`

### "Cannot find module '@/components/site/...'"

**Fix**: Verify `tsconfig.json` has correct path alias:
```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./*"] }
  }
}
```

## Runtime Errors

### Hebrew text appears reversed in OG image (e.g. "יתוריש" instead of "שירותי")

**Cause**: Satori (used by `app/opengraph-image.tsx`) doesn't support RTL properly.
**Fix**: Don't use dynamic OG. Use the static PNG approach:
1. Delete `app/opengraph-image.tsx`
2. Generate PNG: `python3 scripts/og/generate-og.py ...`
3. Reference in `app/layout.tsx`: `images: [{ url: "/og.png?v=1" }]`

### AnimatedCounter shows nothing (numbers invisible)

**Cause**: `bg-clip-text text-transparent` gradient on parent `<dd>` doesn't propagate to nested `<span>` from `<AnimatedCounter />` in some browsers.
**Fix**: Use solid `text-primary` on the `<dd>` instead of gradient:
```tsx
<dd className="order-1 text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
  {value}
</dd>
```

### WhatsApp preview shows old/broken OG image (cache)

**Causes & fixes**:
1. WhatsApp caches previews for ~30 days per URL
2. **Bump cache version**: change `?v=N` in og.png URL → re-deploy
3. **Force refresh via FB debugger**: https://developers.facebook.com/tools/debug/?q=<URL> → "Scrape Again"
4. **Send to a fresh chat** that has never seen the URL
5. **Add `/share` route** as alt URL: send `eli-energy.vercel.app/share` instead of root

### Form submission fails with image

**Causes**:
1. Image > 8MB → reject locally
2. FormSubmit needs first-time email verification — owner clicks link in email once
3. CORS errors → use `https://formsubmit.co/ajax/<email>` (the `/ajax/` path supports CORS)
4. Network error → fallback to WhatsApp deeplink (already implemented in template)

### "Cannot resolve module 'lucide-react' / icons missing"

If a specific icon (e.g. `FlaskConical`) doesn't exist:
- Check current Lucide docs: https://lucide.dev/icons/
- Check installed version: `npm list lucide-react`
- Update: `npm install lucide-react@latest`

## Deployment Issues

### GitHub Actions deploy fails with "Could not retrieve Project Settings"

`VERCEL_PROJECT_ID` or `VERCEL_ORG_ID` not set in GitHub secrets.
**Fix**: Run `vercel link --yes` locally, find IDs in `.vercel/project.json`, add as GitHub secrets.

### Vercel deploy fails with `team-configuration` error

Hobby plan rejects commits not authored by team owner.
**Fix**:
```bash
git config user.email <owner-email-on-vercel>
git config user.name <owner-name>
# Rewrite history if needed
git filter-branch --env-filter '
  export GIT_AUTHOR_EMAIL=<owner-email>
  export GIT_AUTHOR_NAME=<owner-name>
  export GIT_COMMITTER_EMAIL=<owner-email>
  export GIT_COMMITTER_NAME=<owner-name>
' -f HEAD
git push --force
```

### "Resource not accessible by integration" on workflow comment step

**Fix**: Add to workflow root:
```yaml
permissions:
  contents: write
```

Plus enable in repo Settings → Actions → General → Workflow permissions.

## RTL / Hebrew Issues

### Floating element on wrong side

In RTL, `left-X` is physically on the **right** side. Use intentionally:
- WhatsApp float: `left-5` → physically right side ✓ (good for thumb on most users)
- Floating CTA: keep `left-X` for right-side placement in RTL

### Mixed Hebrew + numbers display weirdly

Wrap each language in span with explicit `dir`:
```tsx
<span dir="ltr">24/7</span>{" "}<span dir="rtl">חירום</span>
```

For OG image (PIL), pre-reverse Hebrew strings (already done in `generate-og.py`). For HTML, browsers handle it correctly with `<html dir="rtl">`.

### Lucide arrow icon points wrong way

In RTL, "back" arrows visually face right. To flip a Lucide arrow:
```tsx
<ArrowLeft className="rotate-180" />
// or for icons that don't have a directional version:
<ChevronLeft className="rotate-180" />
```

In ELI ENERGY template, `ArrowLeft` is used for "next" because in RTL pointing-left = moving forward visually.

## Performance

### Slow Lighthouse score

Common culprits in this template:
- Unoptimized logo PNG (>500KB) → run `process-logo.py` or compress with tinypng.com
- Heebo font not preloaded → already handled by Next.js Heebo via `next/font/google`
- Sparks animation runs constantly → keep at 8 max (already)

### Layout shift (CLS)

The Hero stats card uses `min-h` on the container. Don't remove it. Sparks `position: absolute` so they don't affect layout.

### Slow form image upload

> 5MB images on slow networks → add a "compressing..." indicator. Or use canvas to compress before upload (not currently in template, easy add).

## Common Customization Mistakes

### Breaking the bento grid

The 8-col grid math: 1×lg(4) + 2×md(3+3) + 3×sm(2+2+2) = 16 = 2 rows. If you change service sizes, recompute or you'll get gaps.

### Wrong featured card

Only ONE service should have `accent: true`. The CSS gradient + pulse badge is designed for a single featured card.

### Forgetting to update OG image after changing copy

The static OG is a PNG. Changing site-config.ts doesn't auto-update it. Re-run `generate-og.py` and bump `?v=N` in layout.tsx.

### Deleting CertificationsStrip

The trust strip is a CRITICAL conversion element per ui-ux-pro-max research. Don't remove it. Keep at least 4 badges.

### Removing animations entirely

Reveal/Sparks/Magnetic add ~5KB and create a premium feel. Don't strip them unless lighthouse demands it (it won't).

## Verification Workflow

After every major change:

```bash
# 1. Build cleanly
npm run build

# 2. Test locally
npm run dev   # → http://localhost:3000

# 3. Verify all sections visible
#    Hero / Certifications / Services / About / Testimonials / Process / Contact

# 4. Test contact form templates pre-fill
#    Test image upload (drag a small image → preview appears)

# 5. Check OG image
#    open http://localhost:3000/og.png

# 6. Push to deploy
git push
```
