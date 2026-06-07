/**
 * @fileoverview PodcastGrid component — responsive grid of podcast preview cards.
 */

import React from 'react';
import PodcastCard from './PodcastCard.jsx';
import './PodcastGrid.css';

/**
 * Renders a responsive CSS Grid of PodcastCard components.
 *
 * Uses `.map()` to transform the podcasts array into individual
 * PodcastCard elements, passing each podcast object via props.
 *
 * @param {Object} props          - Component props.
 * @param {Array}  props.podcasts - Array of podcast data objects from the API.
 * @returns {JSX.Element} The rendered podcast grid.
 */
function PodcastGrid({ podcasts }) {
  if (!podcasts || podcasts.length === 0) {
    return (
      <div className="podcast-grid__empty">
        <p>No podcasts found.</p>
      </div>
    );
  }

  return (
    <section className="podcast-grid" aria-label="Podcast grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </section>
  );
}

export default PodcastGrid;
