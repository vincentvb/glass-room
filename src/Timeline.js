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

export default () => {
  const [cardId, setCardId] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const components = {
    Facebook: FacebookCard,
    Apple: AppleCard,
    Amazon: AmazonCard,
    Google: GoogleCard,
    Netflix: NetflixCard,
  };

  const displayCompanyCards = protestData.map((card, index) => {
    const CardType = components[card.companyName];
    return (
      <CardType
        cardContent={card}
        id={index}
        setModalShow={setModalShow}
        setCardId={setCardId}
      />
    );
  });
  return (
    <div>
      <VerticalTimeline style={{ backgroundColor: 'red' }}>
        {displayCompanyCards}
      </VerticalTimeline>
      <Modal
        show={modalShow}
        content={protestData[cardId]}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
