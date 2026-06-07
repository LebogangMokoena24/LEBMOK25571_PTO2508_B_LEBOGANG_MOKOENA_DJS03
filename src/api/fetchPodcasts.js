/**
 * @fileoverview API fetching utilities for the podcast discovery app.
 */

const API_URL = 'https://podcast-api.netlify.app/';

/**
 * Fetches the full list of podcast previews from the remote API.
 *
 * @async
 * @returns {Promise<Array<Object>>} Resolves with an array of podcast preview objects.
 * @throws {Error} Throws if the network request fails or the response is not OK.
 *
 * @example
 * const podcasts = await fetchPodcasts();
 */
export async function fetchPodcasts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch podcasts: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
}
