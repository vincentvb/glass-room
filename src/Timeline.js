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

  const displayCompanyCards_ongoing = filteredCompanyCards.map((card, index) => {
    const CardType = components[card.companyName];
    return (
      <div className="yearDiv">
      {card.year === 'Ongoing' &&
        <CardType
          cardContent={card}
          key={index}
          id={card.id}
          setModalShow={setModalShow}
          setCardId={setCardId}
        />
      }
      </div>
    );
  });

  const displayCompanyCards_2019 = filteredCompanyCards.map((card, index) => {
      const CardType = components[card.companyName];
      return (
        <div className="yearDiv">
        {card.year === '2019' &&
          <CardType
            cardContent={card}
            key={index}
            id={card.id}
            setModalShow={setModalShow}
            setCardId={setCardId}
          />
        }
        </div>
      );
    });

    const displayCompanyCards_2018 = filteredCompanyCards.map((card, index) => {
        const CardType = components[card.companyName];
        return (
          <div className="yearDiv">
          {card.year === '2018' &&
            <CardType
              cardContent={card}
              key={index}
              id={card.id}
              setModalShow={setModalShow}
              setCardId={setCardId}
            />
          }
          </div>
        );
      });

      const displayCompanyCards_2017 = filteredCompanyCards.map((card, index) => {
          const CardType = components[card.companyName];
          return (
            <div className="yearDiv">
            {card.year === '2017' &&
              <CardType
                cardContent={card}
                key={index}
                id={card.id}
                setModalShow={setModalShow}
                setCardId={setCardId}
              />
            }
            </div>
          );
        });

        const displayCompanyCards_2016 = filteredCompanyCards.map((card, index) => {
            const CardType = components[card.companyName];
            return (
              <div className="yearDiv">
              {card.year === '2016' &&
                <CardType
                  cardContent={card}
                  key={index}
                  id={card.id}
                  setModalShow={setModalShow}
                  setCardId={setCardId}
                />
              }
              </div>
            );
          });

          const displayCompanyCards_2015 = filteredCompanyCards.map((card, index) => {
              const CardType = components[card.companyName];
              return (
                <div className="yearDiv">
                {card.year === '2015' &&
                  <CardType
                    cardContent={card}
                    key={index}
                    id={card.id}
                    setModalShow={setModalShow}
                    setCardId={setCardId}
                  />
                }
                </div>
              );
            });

            const displayCompanyCards_2014 = filteredCompanyCards.map((card, index) => {
                const CardType = components[card.companyName];
                return (
                  <div className="yearDiv">
                  {card.year === '2014' &&
                    <CardType
                      cardContent={card}
                      key={index}
                      id={card.id}
                      setModalShow={setModalShow}
                      setCardId={setCardId}
                    />
                  }
                  </div>
                );
              });

              const displayCompanyCards_2013 = filteredCompanyCards.map((card, index) => {
                  const CardType = components[card.companyName];
                  return (
                    <div className="yearDiv">
                    {card.year === '2013' &&
                      <CardType
                        cardContent={card}
                        key={index}
                        id={card.id}
                        setModalShow={setModalShow}
                        setCardId={setCardId}
                      />
                    }
                    </div>
                  );
                });

                const displayCompanyCards_2012 = filteredCompanyCards.map((card, index) => {
                    const CardType = components[card.companyName];
                    return (
                      <div className="yearDiv">
                      {card.year === '2012' &&
                        <CardType
                          cardContent={card}
                          key={index}
                          id={card.id}
                          setModalShow={setModalShow}
                          setCardId={setCardId}
                        />
                      }
                      </div>
                    );
                  });

                  const displayCompanyCards_2011 = filteredCompanyCards.map((card, index) => {
                      const CardType = components[card.companyName];
                      return (
                        <div className="yearDiv">
                        {card.year === '2011' &&
                          <CardType
                            cardContent={card}
                            key={index}
                            id={card.id}
                            setModalShow={setModalShow}
                            setCardId={setCardId}
                          />
                        }
                        </div>
                      );
                    });

                    const displayCompanyCards_2010 = filteredCompanyCards.map((card, index) => {
                        const CardType = components[card.companyName];
                        return (
                          <div className="yearDiv">
                          {card.year === '2010' &&
                            <CardType
                              cardContent={card}
                              key={index}
                              id={card.id}
                              setModalShow={setModalShow}
                              setCardId={setCardId}
                            />
                          }
                          </div>
                        );
                      });

                      const displayCompanyCards_2009 = filteredCompanyCards.map((card, index) => {
                          const CardType = components[card.companyName];
                          return (
                            <div className="yearDiv">
                            {card.year === '2009' &&
                              <CardType
                                cardContent={card}
                                key={index}
                                id={card.id}
                                setModalShow={setModalShow}
                                setCardId={setCardId}
                              />
                            }
                            </div>
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
        <VerticalTimeline>
        <h2>Ongoing</h2>
        {displayCompanyCards_ongoing}
        <h2>2019</h2>
        {displayCompanyCards_2019}
        <h2>2018</h2>
        {displayCompanyCards_2018}
        <h2>2017</h2>
        {displayCompanyCards_2017}
        <h2>2016</h2>
        {displayCompanyCards_2016}
        <h2>2015</h2>
        {displayCompanyCards_2015}
        <h2>2014</h2>
        {displayCompanyCards_2014}
        <h2>2013</h2>
        {displayCompanyCards_2013}
        <h2>2012</h2>
        {displayCompanyCards_2012}
        <h2>2011</h2>
        {displayCompanyCards_2011}
        <h2>2010</h2>
        {displayCompanyCards_2010}
        <h2>2009</h2>
        {displayCompanyCards_2009}
        </VerticalTimeline>
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
