# Henry Langenhoven

Static portfolio site for GitHub Pages.

## Local preview

Run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Structure

- `index.html` contains the site markup.
- `assets/css/style.css` contains the custom theme.
- `assets/js/main.js` contains the small amount of progressive enhancement.
- `assets/img/` contains the images used by the site.

## Deployment

GitHub Pages deploys the repository root directly via `.github/workflows/deploy.yml`.
