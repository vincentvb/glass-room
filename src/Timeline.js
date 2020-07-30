import React, { useState } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AmazonCard from './companyCards/Amazon';
import FacebookCard from './companyCards/Facebook';
import GoogleCard from './companyCards/Google';
import NetflixCard from './companyCards/Netflix';
import AppleCard from './companyCards/Apple';
import protestData from './protestData';
import Modal from './Modal';
import Dropdown from './Dropdown';
import SlidingPane from "react-sliding-pane";
import {GrFilter} from 'react-icons/gr'
import "react-sliding-pane/dist/react-sliding-pane.css";
import './Dropdown.scss';
import './Timeline.css'

export default () => {
  const allCompanies = ['Facebook', 'Google', 'Amazon', 'Apple', 'Netflix'];
  const allYears = ['2009', '2011', '2016', '2018'];
  const allCountries = ['Internet', 'France', 'Germany'];
  const allProtests = ['Consumer Outrage', 'Ethics', 'Labor/Wage'];
  const [cardId, setCardId] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [validCompanies, setValidCompanies] = useState(allCompanies);
  const [validYears, setValidYears] = useState(allYears);
  const [validCountries, setValidCountries] = useState(allCountries);
  const [validProtests, setValidProtests] = useState(allProtests);
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const components = {
    Facebook: FacebookCard,
    Apple: AppleCard,
    Amazon: AmazonCard,
    Google: GoogleCard,
    Netflix: NetflixCard,
  };

  const filterObject = {
    companies: validCompanies,
    years: validYears,
    countries: validCountries,
    protests: validProtests,
  };
  const filterFunction = function(filterObject) {
    return function(card) {
      return (
        filterObject.companies.includes(card.companyName) &&
        filterObject.years.includes(card.year) &&
        filterObject.countries.includes(card.country) &&
        filterObject.protests.includes(card.protest)
      );
    };
  };

  const filteredCompanyCards = protestData.filter(filterFunction(filterObject));

  const displayCompanyCards = filteredCompanyCards.map((card, index) => {
    const CardType = components[card.companyName];
    return (
      <CardType
        cardContent={card}
        key={index}
        id={card.id}
        setModalShow={setModalShow}
        setCardId={setCardId}
      />
    );
  });

  return (
      <div className="timelineMainDiv">
        <div className="filterDiv" >
          <Dropdown
            title="Protests"
            items={allProtests}
            multiSelect
            state={validProtests}
            setFunction={setValidProtests}
          /> 
          <Dropdown
            title="Companies"
            items={allCompanies}
            multiSelect
            state={validCompanies}
            setFunction={setValidCompanies}
          />
          <Dropdown
            title="Years"
            items={allYears}
            multiSelect
            state={validYears}
            setFunction={setValidYears}
          />
          <Dropdown
            title="Countries"
            items={allCountries}
            multiSelect
            state={validCountries}
            setFunction={setValidCountries}
          />
        </div>
        <div className="timelineModalDiv">
          <VerticalTimeline>{displayCompanyCards}</VerticalTimeline>
          <Modal
            show={modalShow}
            content={protestData[cardId]}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div>
      <div className="optionsButton">
        <button className="btn btn-danger btn-circle btn-md" onClick={() => setState({ isPaneOpenLeft: true })}>
          <GrFilter style={{fontSize:'27px'}}/>
        </button>
      </div>
      <SlidingPane
        isOpen={state.isPaneOpenLeft}
        from="left"
        width="50%"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <Dropdown
            title="Protests"
            items={allProtests}
            multiSelect
            state={validProtests}
            setFunction={setValidProtests}
          /> 
          <Dropdown
            title="Companies"
            items={allCompanies}
            multiSelect
            state={validCompanies}
            setFunction={setValidCompanies}
          />
          <Dropdown
            title="Years"
            items={allYears}
            multiSelect
            state={validYears}
            setFunction={setValidYears}
          />
          <Dropdown
            title="Countries"
            items={allCountries}
            multiSelect
            state={validCountries}
            setFunction={setValidCountries}
          />
      </SlidingPane>
    </div>
      </div>
  );
};
