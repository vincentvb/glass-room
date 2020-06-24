import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import googleIcon from '../companyIcons/googleicon.png'

export default ({ cardContent }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#34A854', color: 'black' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="2011 - present"
      iconStyle={{
        background: '#f3f3f3',
        color: 'black',
        borderStyle: 'solid',
        borderColor: '#34A854',
      }}
      icon={
        <img src={googleIcon} style={{ height: '52px', width: '52px', left: '28%', top: '27%'}}/>
      }
    />
  );
};
