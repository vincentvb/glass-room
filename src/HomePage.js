import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="Homeblock">
      <Container fluid className="LandingImage">
        <Row className="justify-content-md-left p-2">
          <Col xs lg="6">
            <h2 className="Home-Title white p-3">Protests, Dissents, and Actions in Tech</h2>
            <div className="Description white p-3 mt-3">
              As tech companies have grown and expanded their global reach, there has been increasingly visible backlash and
              resistance against their practices from both inside and outside the industry.
              This timeline highlights more than 100 protests over the last ten years selected from publicly available information.
              It offers a view into the consequences of tech companies’ decisions, policies, and
              practices and their impact on their workforce, users, contractors, vendors, clients, and customers.
            </div>
            <div className="ButtonContainer mt-3">
              <Link to="/timeline">
                <Button className="pl-4 pt-2 pb-2 pr-4" variant="light" fluid>
                  <span className="Timeline-text">GO TO TIMELINE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="88" height="32" viewBox="0 0 88 32"><g fill="none" fill-rule="evenodd" stroke="#4453f7" stroke-width="3"><path d="M8 16h72M72 8l8 8-8 8"></path></g></svg>
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}