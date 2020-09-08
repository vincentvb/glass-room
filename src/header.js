import React, { useState } from 'react';
import logo from './logo.svg';
import './header.css';

function Header (props) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
      <div id="header">
        <header>
          <div id="logo">
            <img src={logo} alt="line drawing Logo art" />
            <span class="brand">The Glass Room</span>
          </div>
          <div id="nav">
            <div id="menu-button" className={isActive ? 'active': null}
    onClick={toggleClass}>
              <div id="line-1" className={isActive ? 'active': null}
      onClick={toggleClass}></div>
              <div id="line-2" className={isActive ? 'active': null}
      onClick={toggleClass}></div>
              <div id="line-3" className={isActive ? 'active': null}
      onClick={toggleClass}></div>
            </div>
            <div id="menu" className={isActive ? 'active': null}
    onClick={toggleClass}>
              <div class="border-corners">
                <ul>
                  <li><a href="./">Home</a></li>
                  <li><a href="./timeline">Timeline</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
}

export default Header;
