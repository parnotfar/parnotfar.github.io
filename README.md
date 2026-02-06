# Par Not Far Website

Landing page for [parnotfar.com](https://parnotfar.com).

## Local Development

1. Open `index.html` in a browser, or run a local server:
   ```bash
   cd website/parnotfar
   python -m http.server 8000
   ```
   Then visit http://localhost:8000

2. Replace `YOUR_FORM_ID` in `app.js` with your Formspree form ID to test the waitlist form.

## Assets to Add

Add these files to `assets/images/`:

| File | Description |
|------|-------------|
| `screenshot-1.png` | vCaddie conversation / shot recommendation UI |
| `screenshot-2.png` | vCaddie hole visualization or scorecard |
| `hero.png` | (Optional) Hero image or app mockup |

Use PNG or WebP at ~1–2x device resolution for retina screens.

## Formspree Setup

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form (e.g. "Par Not Far Waitlist")
3. Copy your form ID from the endpoint (e.g. `https://formspree.io/f/abcd1234` → `abcd1234`)
4. In `app.js`, replace `YOUR_FORM_ID` with your form ID
5. In `index.html`, update the form `action` attribute to `https://formspree.io/f/YOUR_FORM_ID` (or it will be set by JS once you update `app.js`)

Note: The JavaScript sets the form action dynamically, so updating `app.js` is sufficient.

## Deployment to GitHub Pages

This site is designed to be deployed from the `parnotfar/parnotfar.github.io` repository.

1. Copy the contents of this directory to the root of `parnotfar.github.io`
2. Push to the `main` branch
3. GitHub Pages will serve the site at https://parnotfar.github.io

### Custom Domain (parnotfar.com)

1. In the repo: **Settings → Pages → Custom domain** → enter `parnotfar.com`
2. At your DNS provider: add a CNAME record: `parnotfar` (or `www`) → `parnotfar.github.io`
3. Wait for DNS propagation; GitHub will show a green check when ready
