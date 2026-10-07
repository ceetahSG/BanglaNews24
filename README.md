# Bangla News 24

A modern Bengali news portal built with Next.js, TypeScript, Tailwind CSS, and MongoDB-backed authentication. The application presents current news, categorized articles, popular stories, and user authentication in a responsive interface optimized for Bengali content.

**Live site:** [bangla-news24-rho.vercel.app](https://bangla-news24-rho.vercel.app)

## Features

- Bengali news portal homepage with curated news sections
- Featured/main news stories and reusable news cards
- Most-read news section
- Category-based news pages
- Individual news article pages
- Scrolling news ticker/marquee
- Responsive navigation, header, and footer
- User sign-up and sign-in flows
- Email/password authentication with Better Auth
- MongoDB database integration for authentication data
- Bengali typography using the Noto Serif Bengali font
- Loading and not-found states
- Toast notifications for user feedback
- Remote news images served from BBC image infrastructure

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [DaisyUI](https://daisyui.com/)
- [Better Auth](https://www.better-auth.com/)
- [MongoDB](https://www.mongodb.com/)
- [ESLint](https://eslint.org/)
- [Vercel](https://vercel.com/) for deployment

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm, pnpm, Yarn, or Bun
- A MongoDB deployment, such as [MongoDB Atlas](https://www.mongodb.com/atlas)

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/ceetahSG/BanglaNews24.git
cd BanglaNews24
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URL=your_mongodb_connection_string
BETTER_AUTH_URL=http://localhost:3000
```

`MONGODB_URL` is used by Better Auth to connect to the MongoDB database. `BETTER_AUTH_URL` should contain the base URL of the application; use the production URL when deploying.

Do not commit `.env.local` or any other file containing secrets.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
.
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js routes, layouts, and API handlers
│   │   ├── api/auth/       # Better Auth API route
│   │   ├── category/       # Category pages
│   │   ├── news/           # Individual article pages
│   │   ├── signin/         # Sign-in page
│   │   ├── signup/         # Sign-up page
│   │   ├── layout.tsx      # Root layout and shared UI
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable UI components
│   ├── lib/                # Authentication clients and server utilities
│   └── assetes/            # Application assets
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
├── package.json            # Scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

## News Data

The homepage currently retrieves curated news sections from the external news service below:

```text
https://news-api-v2.vercel.app/api/news/sections
```

The application requests fresh data without caching so that the homepage can display current content. Availability and response format depend on the external service.

## Authentication

Authentication is implemented with Better Auth and MongoDB. Email/password authentication is enabled, and the auth handler is exposed through the Next.js API route at:

```text
/api/auth/[...all]
```

Before using sign-up or sign-in locally, make sure `MONGODB_URL` and `BETTER_AUTH_URL` are configured correctly.

## Deployment

The project is configured for deployment on Vercel:

1. Import the repository into Vercel.
2. Configure the `MONGODB_URL` environment variable.
3. Configure `BETTER_AUTH_URL` with the deployed application URL.
4. Deploy using the default Next.js build settings.

For a local production check:

```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes and run the checks:

   ```bash
   npm run lint
   npm run build
   ```

4. Commit your changes and open a pull request.

## License

No license has currently been specified for this repository. Contact the repository owner before redistributing or using the project commercially.

## Author

Built and maintained by [ceetahSG](https://github.com/ceetahSG).
