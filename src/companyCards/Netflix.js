import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import netflixIcon from '../companyIcons/netflixicon.png';

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
        borderColor: '#F44335',
      }}
      icon={
        <img
          src={netflixIcon}
          alt=""
          style={{ height: '42px', width: '48px', marginTop: '5px' }}
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
