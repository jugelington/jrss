import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Parser from 'html-react-parser';
import '../CSS/modal.css';

const ArticleModal = ({
  article,
  article: { title, creator, author, isoDate, link, source, content },
  closeModal,
  modalVisible,
}) => {
  return (
    <Modal
      show={modalVisible}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          {title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>{Parser(content)}</Modal.Body>

      <Modal.Footer>
        <Button href={link} variant="primary">
          Read On Site
        </Button>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArticleModal;
