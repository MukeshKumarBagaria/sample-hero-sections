This is a Next.js app implementing multiple homepage hero sections for Technvoita Solution.

## Routes

- `/` Landing with links to hero variations
- `/home1` Minimal professional hero
- `/home2` Gradient + glassmorphism hero
- `/home3` Bento grid with animated marketplace tiles
- `/home4` Corporate style with bold sliding text

## Tech

- Next.js App Router + TailwindCSS
- Framer Motion for animations
- Minimal shadcn-style `Button` component

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the landing page by modifying `src/app/page.tsx`. Hero pages live in `src/app/home*/page.tsx`.

This project uses TailwindCSS and Framer Motion. Fonts use Next's built-in optimization.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
