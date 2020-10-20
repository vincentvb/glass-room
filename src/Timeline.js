import React, { useState } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AmazonCard from './companyCards/Amazon';
import FacebookCard from './companyCards/Facebook';
import GoogleCard from './companyCards/Google';
import NetflixCard from './companyCards/Netflix';
import AppleCard from './companyCards/Apple';
import AdobeCard from './companyCards/Adobe';
import CiscoCard from './companyCards/Cisco';
import HPCard from './companyCards/HP';
import IBMCard from './companyCards/IBM';
import IntelCard from './companyCards/Intel';
import MicrosoftCard from './companyCards/Microsoft';
import OracleCard from './companyCards/Oracle';
import PalantirCard from './companyCards/Palantir';
import PaypalCard from './companyCards/Paypal';
import SalesforceCard from './companyCards/Salesforce';
import SpotifyCard from './companyCards/Spotify';
import TwitterCard from './companyCards/Twitter';
import UberCard from './companyCards/Uber';
import YahooCard from './companyCards/Yahoo';
import protestData from './protestData';
import Modal from './Modal';
import Dropdown from './Dropdown';
import SlidingPane from 'react-sliding-pane';
import { IoMdSwitch } from 'react-icons/io';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Dropdown.scss';
import './Timeline.css';

export default () => {
  const allCompanies = [
    "All",
    'Adobe',
    'Amazon',
    'Apple',
    'Cisco',
    'Facebook',
    'Google',
    'HP',
    'IBM',
    'Intel',
    'Microsoft',
    'Netflix',
    'Oracle',
    'Palantir',
    'Paypal',
    'Salesforce',
    'Spotify',
    'Twitter',
    'Uber',
  ];
  const allYears = [
    "All",
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    'Ongoing',
  ];
  const allCountries = [
    "All",
    'Afghanistan',
    'Belgium',
    'China',
    'France',
    'Germany',
    'Ghana',
    'India',
    'Internet',
    'Israel',
    'Palestine',
    'Qatar',
    'UK',
    'USA',
    'Worldwide',
  ];
  const allProtests = [
    "All",
    'Class Action Lawsuit',
    'Company Policy',
    'Consumer Outrage',
    'Discrimination',
    'Environmental Cause',
    'Ethics',
    'Forced Arbitration',
    'Foreign Working Conditions',
    'Job Security',
    'Labor/Wage',
    'Public Resignation',
    'Sexual Harassment',
    'Tax Evasion',
    'Tech Presence',
    'Other',
  ];
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
    Adobe: AdobeCard,
    Cisco: CiscoCard,
    HP: HPCard,
    IBM: IBMCard,
    Intel: IntelCard,
    Microsoft: MicrosoftCard,
    Oracle: OracleCard,
    Palantir: PalantirCard,
    Paypal: PaypalCard,
    Salesforce: SalesforceCard,
    Spotify: SpotifyCard,
    Twitter: TwitterCard,
    Uber: UberCard,
    Yahoo: YahooCard,
  };

  const filterObject = {
    companies: validCompanies,
    years: validYears,
    countries: validCountries,
    protests: validProtests,
  };
  const filterFunction = function (filterObject) {
    return function (card) {
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
      <div className="filterDiv">
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
          <button
            className="btn btn-circle btn-md "
            onClick={() => setState({ isPaneOpenLeft: true })}
          >
            <IoMdSwitch style={{ fontSize: '27px' }} />
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
