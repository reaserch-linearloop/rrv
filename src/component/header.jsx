import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'; // Assuming you'll create a separate CSS file for styling

const Header = ({ logoText }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>{logoText}</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">not about</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  logoText: PropTypes.string.isRequired,
};

Header.defaultProps = {
  logoText: 'Your Logo',
};

export default Header;
