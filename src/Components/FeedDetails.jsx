import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Form from 'react-bootstrap/lib/Form';
import Alert from 'react-bootstrap/lib/Alert';

const FeedDetails = ({
  feed,
  feed: { displayName, url, tags },
  unsubscribeFromFeed,
  deleteTag,
  feedName,
}) => {
  return (
    <Card
      style={{
        width: '50vw',
        margin: '5px',
        textAlign: 'center',
      }}
      className="feed-card"
      variant="dark"
      bg="dark"
      text="light"
      border="secondary"
    >
      <Card.Header>
        <Card.Title>{displayName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Card.Link href={url}>{url}</Card.Link>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Form
          style={{
            margin: '0 auto',
            width: '25%',
          }}
        >
          <Form.Group controlId="formTag">
            <Form.Label>New Tag:</Form.Label>
            <Form.Control column type="text" placeholder="enter a tag!" />
            <Button variant="secondary" type="submit" style={{ margin: '5px' }}>
              Add Tag
            </Button>
          </Form.Group>
        </Form>
        <Card.Subtitle>Current Tags:</Card.Subtitle>
        {tags ? (
          <ButtonToolbar>
            {tags.length > 0 ? (
              tags.map(t => (
                <OverlayTrigger
                  key={t}
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${t}`}>
                      remove <strong>{t}</strong> tag
                    </Tooltip>
                  }
                >
                  <Button
                    variant="outline-danger"
                    size="sm"
                    style={{ margin: '1px' }}
                    onClick={() => deleteTag(feedName, t)}
                  >
                    {t}
                  </Button>
                </OverlayTrigger>
              ))
            ) : (
              <Alert variant="dark" style={{ margin: '0 auto' }}>
                You haven't added any tags to this feed yet!
              </Alert>
            )}
          </ButtonToolbar>
        ) : (
          'f'
        )}
        <br />
        <Button
          variant="danger"
          onClick={() => {
            return unsubscribeFromFeed(feedName);
          }}
        >
          Unsubscribe
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FeedDetails;
