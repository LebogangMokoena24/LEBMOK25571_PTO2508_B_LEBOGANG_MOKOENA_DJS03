/**
 * @fileoverview Date formatting utilities for the podcast discovery app.
 * Uses date-fns for reliable, human-readable date output.
 *
 * @principle SRP — This module is solely responsible for date formatting logic.
 */

import { formatDistanceToNow, parseISO } from 'date-fns';

/**
 * Utility object for date-related formatting operations.
 */
export const DateUtils = {
  /**
   * Formats an ISO date string as a human-readable relative time string.
   * Falls back to "Unknown date" if parsing fails.
   *
   * @param {string} dateStr - An ISO 8601 date string (e.g. "2022-11-03T07:00:00.000Z").
   * @returns {string} Human-readable string such as "about 2 years ago".
   *
   * @example
   * DateUtils.formatRelative('2022-11-03T07:00:00.000Z');
   * // → "about 2 years ago"
   */
  formatRelative(dateStr) {
    try {
      const date = parseISO(dateStr);
      return `${formatDistanceToNow(date)} ago`;
    } catch {
      return 'Unknown date';
    }
  },

  /**
   * Formats an ISO date string as a full localised date (e.g. "November 3, 2022").
   *
   * @param {string} dateStr - An ISO 8601 date string.
   * @returns {string} Localised full date string.
   */
  formatFull(dateStr) {
    try {
      const date = parseISO(dateStr);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return 'Unknown date';
    }
  },
};
