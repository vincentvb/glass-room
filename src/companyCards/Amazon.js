import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaAmazon } from 'react-icons/fa';

export default ({ cardContent, id, setModalShow, setCardId }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: '#f3f3f3',
        color: 'black',
        textAlign: 'center',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #f3f3f3' }}
      iconStyle={{
        background: '#f3f3f3',
        color: 'black',
        borderStyle: 'solid',
        borderColor: '#FFB550',
      }}
      icon={
        <FaAmazon
          style={{ height: '47px', width: '47px', left: '28%', top: '27%' }}
        />
      }
      onTimelineElementClick={() => {
        setModalShow(true);
        setCardId(id);
      }}
    >
      <h1>{cardContent.companyName}</h1>
      <h4>{cardContent.theme}</h4>
      <h4>{cardContent.date}</h4>
      <h4>{cardContent.location}</h4>
    </VerticalTimelineElement>
  );
};
