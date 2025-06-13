import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="contentful-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            </svg>
          </div>
        </div>
        <h1 className="title">How A Composable CMS Works</h1>
        <p className="subtitle">Create once, use everywhere</p>
      </div>
    </header>
  );
};

export default Header; 