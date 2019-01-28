import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Parser from 'html-react-parser';

const ArticleModal = ({
  article,
  article: { title, creator, author, isoDate, link, source, content },
  closeModal,
  modalVisible,
}) => {
  return (
    <Modal show={modalVisible}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          overflowY: 'scroll',
        }}
      >
        {Parser(content, {
          replace: domNode => {
            if (domNode.name && domNode.name === 'a')
              return <>{domNode.data}</>;
            if (domNode.name && domNode.name === 'img') return <></>;
          },
        })}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArticleModal;
