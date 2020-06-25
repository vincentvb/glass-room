import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import googleIcon from '../companyIcons/googleicon.png';

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
      date="2011 - present"
      iconStyle={{
        background: '#f3f3f3',
        color: 'black',
        borderStyle: 'solid',
        borderColor: '#34A854',
      }}
      icon={
        <img
          src={googleIcon}
          alt=""
          style={{ height: '52px', width: '52px', left: '28%', top: '27%' }}
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
