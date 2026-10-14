# Malkin's Birthday Surprise ✦

A personalized, responsive midnight-romance birthday website for Malkin. It is designed for phone, tablet, and laptop screens and does not need photos of you together.

## What's included
- `index.html` — website content and sections
- `style.css` — responsive midnight sky, rose-gold styling, mobile layout, animations
- `script.js` — twinkling stars, mobile menu, four interactive "open when" letters, clickable constellation stars, animated gift reveal
- `images/` — optional folder for future images

## Preview on your computer
1. Download and extract the ZIP.
2. Open the extracted folder.
3. Double-click `index.html` to view it in your browser.
4. To edit, open the folder in Visual Studio Code.

## Publish free using GitHub Pages
1. Sign in at https://github.com (or create a free account).
2. Create a **Public** repository named `malkin-birthday-surprise`.
3. Upload `index.html`, `style.css`, `script.js`, and the `images` folder if you use it. Keep `index.html` at the repository root.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then press **Save**.
7. Wait a few minutes. GitHub will show the published URL, typically:
   `https://YOUR-USERNAME.github.io/malkin-birthday-surprise/`
8. Test the link on your phone and laptop before sharing it.

## Personalize the wording
- Open `index.html` in a text editor to adjust the birthday letter and visible page text.
- Open `script.js` to change the four open-when letters (search for `const letters`) or the constellation messages (search for `const memoryCopy`).
- Search for `Malkin` in `index.html` to change her name if needed.
- You can add photos later, but the site does not depend on them.

## Updating the live website
Edit the files and upload the changed files to the same repository. GitHub Pages will publish the update automatically after a short delay.

## Notes
- Hosting is free with GitHub Pages for a public repository.
- Google Fonts needs an internet connection; system fallback fonts are included.
- This is a static site: it doesn't collect data or send messages.
