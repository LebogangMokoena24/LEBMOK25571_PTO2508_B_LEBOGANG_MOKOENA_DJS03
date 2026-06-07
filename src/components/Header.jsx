/**
 * @fileoverview Header component for the Podwave landing page.
 */

import React from 'react';
import './Header.css';

/**
 * Site header displaying the Podwave brand name, tagline, and live podcast count.
 *
 * @param {Object}  props              - Component props.
 * @param {number}  props.podcastCount - Total number of podcasts currently loaded.
 * @returns {JSX.Element} The rendered header element.
 */
function Header({ podcastCount }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__logo-mark">◈</span>
          <span className="header__wordmark">Podwave</span>
        </div>

        <div className="header__meta">
          {podcastCount > 0 && (
            <span className="header__count">{podcastCount} shows</span>
          )}
        </div>
      </div>

      <div className="header__hero">
        <h1 className="header__title">
          Your next obsession<br />
          <em>is waiting.</em>
        </h1>
        <p className="header__tagline">
          Discover podcasts worth your time — curated, categorised, always current.
        </p>
      </div>
    </header>
  );
}

export default Header;
