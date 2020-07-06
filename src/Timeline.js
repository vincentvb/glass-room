import React, { useState } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Form } from 'react-bootstrap';
import AmazonCard from './companyCards/Amazon';
import FacebookCard from './companyCards/Facebook';
import GoogleCard from './companyCards/Google';
import NetflixCard from './companyCards/Netflix';
import AppleCard from './companyCards/Apple';
import protestData from './protestData';
import Modal from './Modal';

export default () => {
  const allCompanies = ['Facebook', 'Google', 'Amazon', 'Apple', 'Netflix'];
  const allYears = [2009, 2011, 2016, 2018];
  const allCountries = ['Internet', 'France', 'Germany'];
  const [cardId, setCardId] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [validCompanies, setValidCompanies] = useState(allCompanies);
  const [validYears, setValidYears] = useState(allYears);
  const [validCountries, setValidCountries] = useState(allCountries);
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
  };
  const filterFunction = function(filterObject) {
    return function(card) {
      return (
        filterObject.companies.includes(card.companyName) &&
        filterObject.years.includes(card.year) &&
        filterObject.countries.includes(card.country)
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
        id={index}
        setModalShow={setModalShow}
        setCardId={setCardId}
      />
    );
  });

  const filterCompanySelector = (e, arrayOfObjects, setStateFunction) => {
    let objectName = e.target.name;
    if (arrayOfObjects === validYears) {
      objectName = Number(objectName);
    }
    if (e.target.checked) {
      setStateFunction((arrayOfObjects) => [...arrayOfObjects, objectName]);
    } else {
      setStateFunction(
        arrayOfObjects.filter((company) => company !== objectName)
      );
    }
  };

  const arrayOfCompanySelectors = allCompanies.map((company) => {
    return (
      <Form.Check
        type="checkbox"
        key={company}
        className={`default-checkbox`}
        label={`${company}`}
        name={`${company}`}
        checked={validCompanies.includes(`${company}`)}
        onClick={(e) => {
          filterCompanySelector(e, validCompanies, setValidCompanies);
        }}
        readOnly
      />
    );
  });

  const arrayOfCountries = allCountries.map((country) => {
    return (
      <Form.Check
        type="checkbox"
        key={country}
        className={`default-checkbox`}
        label={`${country}`}
        name={`${country}`}
        checked={validCountries.includes(`${country}`)}
        onClick={(e) => {
          filterCompanySelector(e, validCountries, setValidCountries);
        }}
        readOnly
      />
    );
  });

  const arrayOfYears = allYears.map((year) => {
    return (
      <Form.Check
        type="checkbox"
        key={year}
        className={`default-checkbox`}
        label={year}
        name={year}
        checked={validYears.includes(year)}
        onClick={(e) => {
          filterCompanySelector(e, validYears, setValidYears);
        }}
        readOnly
      />
    );
  });

  return (
    <div>
      <h3>Companies</h3>
      {arrayOfCompanySelectors}
      <h3>Years</h3>
      {arrayOfYears}
      <h3>Countries</h3>
      {arrayOfCountries}
      <VerticalTimeline>{displayCompanyCards}</VerticalTimeline>
      <Modal
        show={modalShow}
        content={protestData[cardId]}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
