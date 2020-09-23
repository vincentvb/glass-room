import React from 'react';
import { Button, Container, Row, Image, Col } from 'react-bootstrap';
import './HomePage.css';
import './About.css';
import { Link } from 'react-router-dom';
import tacticalTechLogo from './tactical-tech.jpg';
import techEquityLogo from './techequity-logo.svg';

export default () => {
  return (
    <div className="Homeblock">
      <Container className="p-4">
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <h2> About the Project</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs>
            <div className="About Description">
              <p>As tech companies have grown and expanded their global reach, there has been increasingly visible backlash and resistance against their practices from both inside and outside the industry.</p>
              <p>This timeline is the digitized version of one of Tactical Tech’s The Glass Room exhibits. It highlights more than 100 protests over the last ten years selected from publicly available information. It offers a view into the consequences of tech companies’ decisions, policies, and practices and their impact on their workforce, users, contractors, vendors, clients, and customers.</p>
              <p>The timeline also reveals the recent trend toward collective worker resistance within Big Tech. Some of these protests have yielded attention and results, while others have flown under the radar or been overlooked by the media. With governments slow to regulate, and companies reluctant or failing at self-regulation, could these protests point toward a form of accountability?</p>
              <p>This digital timeline is brought to you by Tactical Tech and TechEquity Collaborative and sponsored Firefox. It was designed and built by volunteers from TechEquity Collaborative who generously donated their time and skills to digitize the protest timeline: Jesse Luo, Vikas Shukla, Kat Hanner, and Vincent Van Buskirk,.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/timeline">
              <Button className="Button" variant="outline-secondary" fluid>GO TO TIMELINE</Button>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs>
            <h3 className="titlecase About Description">About Glass Room</h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs>
            <div className="About Description">
              <p>The Glass Room looks like a sleek tech pop up, but as you look closer you see nothing is for sale. Instead there is a collection of art, design, and technology objects that explore data, privacy and our relationship with the technologies and platforms we use in our everyday lives. The Glass Room exhibition is an immersive, self-learning experience that
has opened in Berlin, New York, London and most recently in San Francisco attracting over 60,000 visitors. The Glass Room has taken several formats that are smaller like the Glass
Room Plus or the Community Editions which have attracted another 100,000
visitors in the past two years.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs>
            <h3 className="titlecase About Description">About Tactical Tech</h3>
          </Col>
        </Row>
        <Row className="mb-3 About Description">
          <Col xs>
            <Image className="logo" src={tacticalTechLogo} alt="tactical tech logo" fluid />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs>
            <div className="About Description">
              <p>Tactical Tech is an International NGO that aims to investigate and mitigate the impact of technology on society by using art and education interventions to engage with citizens, artists, media and civil society. Based in Berlin, we have an interdisciplinary team of technologists, researchers, designers and production experts. Since 2003, we have
worked to demystify the impact of technology by creating high-quality, accessible resources and engaging cultural spaces.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs>
            <h3 className="titlecase About Description">About TechEquity Collaborative</h3>
          </Col>
        </Row>
        <Row className="mb-3 About Description">
          <Col xs>
            <Image className="logo" src={techEquityLogo} alt="tech equity logo" fluid />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs>
            <div className="About Description">
              <p>TechEquity Collaborative is a non-profit organization that believes the tech industry can and should contribute to broad-based growth that benefits everyone. That instead of being a force for displacement and inequality, tech can create opportunity and widespread prosperity. TechEquity is a member-driven organization made up of individuals and companies that share our values. We educate people in the tech sector around housing and workforce & labor issues and activate them to make change in those key areas. One of the ways we do this is by partnering with tech volunteers to build civic tech projects that further these initiatives.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
