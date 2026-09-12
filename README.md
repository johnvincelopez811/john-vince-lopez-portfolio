# John Vince Lopez Portfolio

A React and Vite portfolio for John Vince T. Lopez, focused on web development, mobile applications, internal business systems, and selected case studies.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Main routes

- `/` — complete professional portfolio
- `/projects/:slug` — full project case studies
- `/upwork` — client-focused portfolio without direct contact information
- `/upwork/projects/:slug` — Upwork-safe case study pages

## GitHub Pages deployment

The included workflow builds and publishes the site whenever changes are pushed to the `main` branch. The Vite base path is derived automatically from the GitHub repository name, and `404.html` keeps React Router pages working when a visitor opens a project URL directly.

After the repository is pushed, open **Settings → Pages** on GitHub and select **GitHub Actions** as the deployment source.

## Content configuration

- Personal information, navigation, social links: `src/data/site.js`
- Services and delivery process: `src/data/services.js`
- Professional experience: `src/data/experience.js`
- Projects and case studies: `src/data/projects.js`
- Skills: `src/data/skills.js`

## Enable the Upwork buttons

Add the full freelancer profile URL in `src/data/site.js`:

```js
export const socials = {
  // ...
  upwork: "https://www.upwork.com/freelancers/YOUR-PROFILE",
};
```

The dedicated `/upwork` route intentionally excludes email, phone, Viber, resume downloads, LinkedIn, and other outbound contact links. Clients should return to Upwork to communicate before a contract begins.

Ready-to-use Upwork profile copy, project descriptions, Project Catalog ideas, and a proposal template are in `UPWORK_PROFILE_GUIDE.md`.
