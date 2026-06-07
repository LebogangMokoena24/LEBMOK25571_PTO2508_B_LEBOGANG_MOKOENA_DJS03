/**
 * @fileoverview App — root component of the Podwave podcast landing page.
 *
 * Responsibilities:
 * - Fetching podcast data from a remote API on initial mount
 * - Managing loading and error states
 * - Rendering the podcast grid once data is successfully fetched
 * - Displaying a header and fallback UI during loading or error
 *
 * @returns {JSX.Element} The rendered application interface.
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import PodcastGrid from './components/PodcastGrid.jsx';
import { fetchPodcasts } from './api/fetchPodcasts.js';
import { genres } from './data.js';
import './App.css';

/**
 * Root application component.
 * Fetches podcast data once on mount and manages UI state transitions.
 *
 * @returns {JSX.Element}
 */
export default function App() {
  /** @type {[Array, Function]} List of podcast preview objects from the API */
  const [podcasts, setPodcasts] = useState([]);

  /** @type {[boolean, Function]} True while the fetch is in progress */
  const [loading, setLoading] = useState(true);

  /** @type {[string|null, Function]} Error message string, or null if no error */
  const [error, setError] = useState(null);

  /**
   * Fetches podcast data once when the component mounts.
   * Updates state based on success or failure of the fetch.
   */
  useEffect(() => {
    fetchPodcasts()
      .then((data) => {
        setPodcasts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong while fetching podcasts.');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header podcastCount={podcasts.length} />

      <main>
        {loading && (
          <div className="message-container" role="status" aria-live="polite">
            <div className="spinner" aria-hidden="true">
              <span /><span /><span />
            </div>
            <p className="message-container__text">Tuning in to the feed…</p>
          </div>
        )}

        {error && (
          <div className="message-container message-container--error" role="alert">
            <span className="message-container__icon" aria-hidden="true">⚠</span>
            <p className="message-container__text">
              Error occurred while fetching podcasts: {error}
            </p>
          </div>
        )}

        {!loading && !error && (
          <PodcastGrid podcasts={podcasts} genres={genres} />
        )}
      </main>

      <footer className="footer">
        <p>◈ Podwave — built with React</p>
      </footer>
    </>
  );
}
