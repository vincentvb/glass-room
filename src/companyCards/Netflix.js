import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import netflixIcon from '../companyIcons/netflixicon.png'

export default ({ cardContent }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#F44335', color: 'black' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="2011 - present"
      iconStyle={{
        background: '#E8E8E8',
        color: 'black',
        borderStyle: 'solid',
        borderColor: '#F44335',
      }}
      icon={
        <img src={netflixIcon} style={{ height: '42px', width: '48px', marginTop: '5px'}}/>
      }
    />
  );
};
