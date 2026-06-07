/**
 * @fileoverview Genre resolution service for the podcast discovery app.
 *
 * @principle SRP — This module is solely responsible for mapping genre IDs to titles.
 */

import { genres } from '../data.js';

/**
 * Service for resolving genre IDs to genre metadata.
 */
export const GenreService = {
  /**
   * Resolves an array of genre IDs to their corresponding title strings.
   *
   * @param {number[]} genreIds - Array of numeric genre IDs.
   * @returns {string[]} Array of genre title strings. Returns "Unknown" for unrecognised IDs.
   *
   * @example
   * GenreService.getNames([1, 3]);
   * // → ["Personal Growth", "History"]
   */
  getNames(genreIds) {
    if (!Array.isArray(genreIds)) return [];
    return genreIds.map(
      (id) => genres.find((g) => g.id === id)?.title ?? 'Unknown'
    );
  },

  /**
   * Returns the full genre object for a given ID.
   *
   * @param {number} id - A numeric genre ID.
   * @returns {Object|undefined} The matching genre object, or undefined if not found.
   */
  getById(id) {
    return genres.find((g) => g.id === id);
  },
};
