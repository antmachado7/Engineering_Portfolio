# António Gomes Engineering Portfolio

Static personal website prepared for GitHub Pages deployment.

## Repository structure

```text
github-pages-site/
├── index.html
├── projects.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── docs/
    │   ├── Antonio_Gomes_CV.pdf
    │   └── Antonio_Gomes_Portfolio.pdf
    ├── icons/
    │   └── favicon.svg
    ├── images/
    │   └── project images used by the site
    └── js/
        └── main.js
```

## Where to place documents

- CV PDF: `assets/docs/Antonio_Gomes_CV.pdf`
- Portfolio PDF: `assets/docs/Antonio_Gomes_Portfolio.pdf`

If you replace either file, keep the same filenames so the download buttons continue to work without changes.

## Local preview

You can open `index.html` directly in a browser, or run a simple local server from the repository root.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## GitHub Pages deployment

### Option 1: Project site

Use this if the repository is named something like `antonio-gomes-portfolio`.

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Commit and push to the `main` branch.
4. On GitHub, open `Settings` -> `Pages`.
5. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
6. Save and wait for GitHub Pages to publish.

Expected URL format:

```text
https://<github-username>.github.io/<repository-name>/
```

Example:

```text
https://antonio-github.github.io/antonio-gomes-portfolio/
```

### Option 2: User site

Use this if you want the site at the root GitHub Pages domain.

1. Create a repository named exactly:

```text
<github-username>.github.io
```

2. Upload the contents of this folder to that repository root.
3. Push to the `main` branch.
4. In `Settings` -> `Pages`, publish from `main` and `/ (root)`.

Expected URL format:

```text
https://<github-username>.github.io/
```

## File naming guidance

- Keep web page filenames lowercase and simple: `index.html`, `projects.html`
- Keep asset folders lowercase: `assets/css`, `assets/js`, `assets/images`, `assets/docs`, `assets/icons`
- Avoid spaces in filenames for anything added later
- Use relative links only, as already configured in the site

## Publishing notes

- GitHub Pages should publish from the repository root on the `main` branch for this setup.
- No build step or backend is required.
- The site uses plain HTML, CSS, and JavaScript so deployment remains simple and maintainable.
