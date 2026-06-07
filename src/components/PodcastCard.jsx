/**
 * @fileoverview PodcastCard component — reusable podcast preview card.
 */

import React from 'react';
import { GenreService } from '../utils/GenreService.js';
import { DateUtils } from '../utils/DateUtils.js';
import './PodcastCard.css';

/**
 * A reusable card component that renders a podcast preview.
 *
 * Displays the podcast cover image, title, season count, genre tags,
 * and the last-updated date in a human-readable format.
 *
 * @param {Object}   props               - Component props.
 * @param {Object}   props.podcast       - The podcast data object passed from the parent.
 * @param {string}   props.podcast.id        - Unique podcast identifier.
 * @param {string}   props.podcast.title     - Podcast title.
 * @param {string}   props.podcast.image     - URL of the podcast cover image.
 * @param {number}   props.podcast.seasons   - Number of seasons available.
 * @param {number[]} props.podcast.genres    - Array of genre IDs.
 * @param {string}   props.podcast.updated   - ISO date string of the last update.
 * @returns {JSX.Element} The rendered podcast card.
 */
function PodcastCard({ podcast }) {
  const { title, image, seasons, genres, updated } = podcast;

  const genreNames = GenreService.getNames(genres);
  const relativeDate = DateUtils.formatRelative(updated);

  return (
    <article className="podcast-card" aria-label={`${title} podcast`}>
      <div className="podcast-card__image-wrap">
        <img
          className="podcast-card__image"
          src={image}
          alt={`${title} cover art`}
          loading="lazy"
        />
        <div className="podcast-card__image-overlay" aria-hidden="true" />
      </div>

      <div className="podcast-card__body">
        <h2 className="podcast-card__title">{title}</h2>

        <p className="podcast-card__seasons">
          {seasons} {seasons === 1 ? 'season' : 'seasons'}
        </p>

        <div className="podcast-card__genres" aria-label="Genres">
          {genreNames.map((name) => (
            <span key={name} className="podcast-card__genre-tag">
              {name}
            </span>
          ))}
        </div>

        <p className="podcast-card__updated">
          <span className="podcast-card__updated-dot" aria-hidden="true" />
          Updated {relativeDate}
        </p>
      </div>
    </article>
  );
}

export default PodcastCard;
