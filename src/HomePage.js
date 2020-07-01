import React from 'react';
import logo from './techequity-logo.svg';
import { Button } from 'react-bootstrap';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="Homeblock">
      <img src={logo} alt="tech equity logo" className="Tech-equity-logo" />
      <p>
        DESCRIPTION OF THIS PROJECT DESCRIPTION OF THIS PROJECT DESCRIPTION OF THIS PROJECT DESCRIPTION OF THIS PROJECT DESCRIPTION OF THIS PROJECT DESCRIPTION OF THIS PROJECT
      </p>
      <Link to="/timeline">
        <Button className="Button" variant="light">GO TO TIMELINE</Button>
      </Link>
    </div>
  )
}