import React from 'react';
// react-bootstrap
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
// utilities
import Parser from 'html-react-parser';
import { dateParser, timeParser } from '../utilities';
import PerfectScrollbar from 'react-perfect-scrollbar';

// css
import '../CSS/cards.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
      // dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <div className="title-div">
          <Modal.Title className="article-container-title">{title}</Modal.Title>
        </div>
        <div className="source-div">
          {/* <Card.Subtitle> */}
          {`${time}   ${date}`} <br /> {source}
          {/* </Card.Subtitle> */}
        </div>
      </Modal.Header>

      <Modal.Body className="article-container-body">
        <PerfectScrollbar>
          {Parser(content, {
            replace: domNode => {
              if (domNode.name && domNode.name === 'img') {
                return (
                  <img
                    alt={domNode.attribs.alt}
                    src={domNode.attribs.src}
                    className="article-container-image"
                  />
                );
              }
            },
          })}
        </PerfectScrollbar>
      </Modal.Body>

      <Modal.Footer className="article-container-footer">
        <ButtonGroup size="sm">
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
