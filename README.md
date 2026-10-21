# Garden service website

A responsive starter project. Built for Full Garden Maintenance Pty Ltd. The form prepares a WhatsApp enquiry; the visitor sends it in WhatsApp.

## Open on Windows

1. Open PowerShell and run `winget install --id Microsoft.VisualStudioCode -e --source winget` or download VS Code from https://code.visualstudio.com/ .
2. Extract this ZIP, then double-click `garden-service.code-workspace` and choose VS Code if prompted.
3. Double-click `index.html` to preview in your browser. No build or packages are needed.

## Business details

Full Garden Maintenance Pty Ltd. Contact: Lukas Nel, 079 319 9854 (+27 79 319 9854). Serving Krugersdorp and surrounding areas.

The quote builder opens a WhatsApp message for the visitor to review and send. Confirm this phone number has WhatsApp enabled. Calls use a telephone link. Confirm the listed services before public launch.

## Publish to GitHub Pages

1. Create an empty GitHub repository named `garden-service`.
2. Upload the extracted project contents, including `.github/workflows/pages.yml`. Ensure the default branch is `main`.
3. In repository Settings → Pages, select GitHub Actions as the publishing source.
4. In Actions, run “Publish website to GitHub Pages” if it has not started. The successful deployment provides your website URL.

Alternatively, with Git installed, from this folder:

```sh
git init -b main
git add .
git commit -m "Start garden service website"
git remote add origin https://github.com/YOUR-USERNAME/garden-service.git
git push -u origin main
```

Use your real GitHub username. Sign in through Git's browser authentication when requested. Never put tokens in project files.

## Files

- `index.html`: page content and form
- `styles.css`: responsive design
- `script.js`: service selection and request builder
- `.github/workflows/pages.yml`: GitHub Pages deployment

The garden artwork is CSS, so the site works without external images or fonts.
