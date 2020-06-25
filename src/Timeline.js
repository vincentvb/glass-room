import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
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

  return (
    <div>
      <VerticalTimeline style={{ backgroundColor: 'red' }}>
        <FacebookCard
          cardContent={protestData[0]}
          id={0}
          setModalShow={setModalShow}
          setCardId={setCardId}
        />
        <AppleCard
          cardContent={protestData[1]}
          id={1}
          setModalShow={setModalShow}
          setCardId={setCardId}
        />
        <NetflixCard
          cardContent={protestData[2]}
          id={2}
          setModalShow={setModalShow}
          setCardId={setCardId}
        />
        <GoogleCard
          cardContent={protestData[3]}
          id={3}
          setModalShow={setModalShow}
          setCardId={setCardId}
        />
        <AmazonCard
          cardContent={protestData[4]}
          id={4}
          setModalShow={setModalShow}
          setCardId={setCardId}
        />
      </VerticalTimeline>
      <Modal
        show={modalShow}
        content={protestData[cardId]}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
