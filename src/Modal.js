import React from 'react';
import { Modal } from 'react-bootstrap';

export default (props) => {
  const { content } = props;
  const listOfSources = content.source.map((resource, index) => {
    return (
      <li key={index}>
        <a href={resource}>{resource}</a>
      </li>
    );
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: content.companyColor, color: 'white' }}
      >
        <div>
          <h1>{content.companyName}</h1>
          <h4>{content.theme}</h4>
          <h4>{content.numberOfPeople + ' ' + content.actionDoneBy}</h4>
          <h4>{content.date}</h4>
          <h4>{content.location}</h4>
        </div>
      </Modal.Header>
      <Modal.Body>
        <h5>{content.event}</h5>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <h5>Resources</h5>
          <ul style={{ listStyleType: 'none' }}>{listOfSources}</ul>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
