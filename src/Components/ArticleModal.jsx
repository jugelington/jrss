import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Parser from 'html-react-parser';
import { dateParser, timeParser } from '../utilities';
import '../CSS/modal.css';
import '../CSS/articleCard.css';

const ArticleModal = ({
  article,
  article: { title, creator, author, isoDate, link, source, content },
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
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <div className="title-div">
          <Modal.Title id="example-custom-modal-styling-title">
            {title}
          </Modal.Title>
          {source}
        </div>
        <div className="time-div">
          {time} <br />
          {date}
        </div>
      </Modal.Header>

      <Modal.Body>{Parser(content)}</Modal.Body>

      <Modal.Footer>
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
