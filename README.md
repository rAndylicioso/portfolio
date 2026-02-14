# Randy Andrei Andres - Portfolio

Professional portfolio website showcasing my work as an AI/Software Developer and Certified Prompt Engineer.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** GitHub Pages (Static Export)

## 🎨 Features

- ✅ Responsive two-column layout
- ✅ Interactive video project previews (hover/tap to play)
- ✅ Animated contact cards with modal-like effects
- ✅ Mobile-optimized UI with touch support
- ✅ Professional certifications with verification links
- ✅ AI-focused tech stack showcase

## 💻 Development

Run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Customization

### Update Personal Info
Edit `app/page.tsx` to customize:
- Profile information
- About section
- Tech stack
- Projects
- Certifications
- Experience
- Contact links

### Add Assets
- **Profile Photo:** Add to `public/profile.jpg`
- **Resume:** Add to `public/resume.pdf`
- **Project Videos:** Add to `public/videos/`
- **Certification Logos:** Add to `public/logos/`

### Update Site Metadata
Edit `app/layout.tsx` to change:
- Browser tab title
- Meta description
- SEO settings

## Deploy to GitHub Pages

This project is configured for static export to GitHub Pages.

### Deployment Steps

1. **Build the static site:**
   ```bash
   npm run build
   ```
   This creates an `out` directory with the static files.

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Configure GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to Pages settings
   - Under "Build and deployment", select "GitHub Actions" as the source
   - Create a workflow file at `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [main]
     workflow_dispatch:
   
   permissions:
     contents: read
     pages: write
     id-token: write
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: ./out
     
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/deploy-pages@v4
           id: deployment
   ```

4. **Access your site:**
   Your portfolio will be available at `https://[username].github.io/[repository-name]`

   The workflow file already exists at `.github/workflows/deploy.yml` and will run automatically on every push to main.

## 📂 Project Structure

```
myportfolio/
├── app/
│   ├── components/
│   │   └── VideoPlayer.tsx    # Video preview component
│   ├── layout.tsx              # Root layout & metadata
│   ├── page.tsx                # Main portfolio page
│   └── globals.css             # Global styles
├── public/
│   ├── logos/                  # Certification logos
│   ├── videos/                 # Project demo videos
│   ├── profile.jpg             # Profile photo
│   └── resume.pdf              # Resume file
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
└── next.config.ts              # Static export config
```

### Project Configuration

This project is configured with:
- **Output mode:** Static export (`output: 'export'` in `next.config.ts`)
- **Image optimization:** Disabled (`unoptimized: true`) for GitHub Pages compatibility
- **Jekyll bypass:** `.nojekyll` file in public directory

## 📄 License

© 2026 Randy Andrei Andres. All rights reserved.
