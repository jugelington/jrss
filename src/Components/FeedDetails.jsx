import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

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
        <Card.Subtitle>Tags:</Card.Subtitle>
        {tags ? (
          <ButtonToolbar>
            {tags.map(t => (
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
            ))}
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
