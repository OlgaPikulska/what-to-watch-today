# 🎥 MovieApp

**MovieApp** is a film browsing, searching, and management application built with **Next.js**, utilizing **Tailwind CSS** and **Material-UI**. It fetches movie data from **The Movie Database (TMDB API)** and supports various devices (mobile, tablet, desktop). Users can also manage their personal movie library.

---

## 🛠️ Technologies

- **Next.js** – React framework with SSR and ISR support.
- **Tailwind CSS** – Utility-first CSS framework.
- **Material-UI (MUI)** – React component library for building user interfaces.
- **Firebase** – Authentication and real-time database for managing user data.
- **TMDB API** – Source of movie data.
- **TypeScript** – Ensures type safety and better code maintainability.

---

## 🚧 Development Setup

### 1. Clone the repository:

```bash
git clone https://github.com/OlgaPikulska/what-to-watch-today.git
cd what-to-watch-today
```

### 2. Install dependencies using pnpm:

```bash
npm install -g pnpm
pnpm install
```

### 3. Set up the TMDB API key in an .env.local file:

1. Go to the [TMDB website](https://developer.themoviedb.org/reference/intro/getting-started).
2. Generate your **API key**.
3. Create a `.env.local` file in the project root and add your API key:

```bash
NEXT_PUBLIC_API_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_API_KEY=your_api_key
```

### 4. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 5. Run tests:

```bash
pnpm test
```

### 6. Build for production:

```bash
pnpm build
pnpm start
```

---

## 📖 API Documentation

- [Trending Movies API](https://developer.themoviedb.org/reference/trending-all) – Fetch today's trending movies.
- [Search Movies API](https://developer.themoviedb.org/reference/search-movie) – Search movies by keyword.
- [Movie Details API](https://developer.themoviedb.org/reference/movie-details) – Retrieve detailed movie information.
- [Movie Trailers API](https://developer.themoviedb.org/reference/movie-videos) – Fetch movie trailers from YouTube.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
