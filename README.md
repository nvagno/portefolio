# nyhasinavagno.fr

Personal academic website of Ny Hasina M. Vagno. Built with Next.js (App Router) and Tailwind CSS v4.

## Editing content

One page per section: `/` (home), `/research`, `/projects`, `/publications`, `/cv`, `/contact`.

All content lives in [`content/profile.ts`](content/profile.ts): research interests, selected work,
publications, expertise, CV entries and contact links. Components under `components/` only render it;
`app/*/page.tsx` files only wire routes and metadata. The navigation and sitemap are generated from `nav`.

- To add a publication, append to `publications`. The section switches automatically from the placeholder note to a reference list.
- Each `work` entry has a `kind` (`Research`, `Engineering` or `Experiment`) that sets its group.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```
