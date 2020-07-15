import React from 'react';
import techEquityLogo from './techequity-logo.svg';
import { Button, Container, Row, Image, Col } from 'react-bootstrap';
import './HomePage.css';
import { Link } from 'react-router-dom';
import tacticalTechLogo from './tactical-tech.jpg';
import cards from './cards.jpg';

export default () => {
  return (
    <div className="Homeblock">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <h2 className="title">Protests, Dissents, and Actions in Tech</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs>
            <div className="Description">
              <p>In Collaboration with Tactical Tech and TechEquity Collaborative</p>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={{ span: 3, offset: 3 }}>
            <Image src={tacticalTechLogo} alt="tactical tech logo" fluid />
          </Col>
          <Col xs={{ span: 3 }}>
            <Image src={techEquityLogo} alt="tech equity logo" fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image className="CardImage" src={cards} fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/timeline">
              <Button className="Button" variant="light" fluid>GO TO TIMELINE</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}