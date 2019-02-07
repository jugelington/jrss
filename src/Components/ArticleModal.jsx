import React from 'react';
// react-bootstrap
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
// utilities
import Parser from 'html-react-parser';
import { dateParser, timeParser } from '../utilities';
// css
import '../CSS/modal.css';
import '../CSS/cards.css';

const ArticleModal = ({
  article: { title, isoDate, link, source, content },
  closeModal,
  modalVisible,
}) => {
  const parsedDate = new Date(isoDate);
  const date = dateParser(parsedDate);
  const time = timeParser(parsedDate);
  return (
    <Modal
      show={modalVisible}
      dialogClassName="modal-90w"
      className="modal"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <div className="title-div">
          <Modal.Title id="modal-title">{title}</Modal.Title>
          {source}
        </div>
        <div className="time-div">
          {time} <br />
          {date}
        </div>
      </Modal.Header>

      <Modal.Body className="modal-body">
        {Parser(content, {
          replace: domNode => {
            if (domNode.name && domNode.name === 'img') {
              return (
                <img
                  alt={domNode.attribs.alt}
                  src={domNode.attribs.src}
                  className="modal-image"
                />
              );
            }
          },
        })}
      </Modal.Body>

      <Modal.Footer className="modal-footer">
        <ButtonGroup>
          <Button href={link} variant="outline-secondary">
            Read On Site
          </Button>
          <Button variant="outline-light" onClick={closeModal}>
            Close
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

export default ArticleModal;
