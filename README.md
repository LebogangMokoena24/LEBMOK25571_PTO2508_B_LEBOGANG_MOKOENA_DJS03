# LEBMOK25571_PTO2508_B_LEBOGANG_MOKOENA_DJS03

# DJS03 — Podwave: React Podcast Landing Page

A podcast discovery landing page built with React. Fetches live podcast data from an external API and displays it in a responsive grid of cards.

---

## What It Does

- Fetches podcast data from `https://podcast-api.netlify.app/` when the page loads
- Shows a loading spinner while the data is being fetched
- Shows an error message if the fetch fails
- Displays all podcasts in a responsive grid
- Each podcast card shows:
  - Cover image
  - Title
  - Number of seasons
  - Genre tags
  - Last updated date (e.g. "about 2 years ago")

---

## Built With

- React 18
- Vite
- date-fns
- CSS Grid
- JavaScript

---

## Project Structure

src/
├── api/
│   └── fetchPodcasts.js       # Fetches data from the API
├── components/
│   ├── Header.jsx / .css      # Page header and tagline
│   ├── PodcastCard.jsx / .css # Individual podcast card
│   └── PodcastGrid.jsx / .css # Responsive grid layout
├── utils/
│   ├── DateUtils.js           # Formats dates into readable strings
│   └── GenreService.js        # Converts genre IDs to genre names
├── App.jsx / App.css          # Root component, manages all state
├── data.js                    # Static genre data
├── index.css                  # Global styles and CSS variables
└── main.jsx                   # Entry point

---

## How To Run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## How It Works

Data is fetched once when the app loads using `useEffect`. The result is stored in state using `useState`. While loading, a spinner is shown. If the fetch fails, an error message is shown. Once the data is ready, it is passed as props into the `PodcastGrid` component, which maps over the array and renders a `PodcastCard` for each podcast.

Genre IDs from the API are resolved to names using `GenreService`. Dates are formatted using `date-fns` inside `DateUtils`.

---

## Responsive Breakpoints

| Screen | Layout |
|---|---|
| Desktop (900px+) | Auto-fill grid, min 220px per card |
| Tablet (~768px) | Auto-fill grid, min 180px per card |
| Mobile (~375px) | 2 columns |

