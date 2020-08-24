import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubHeader = () => (
  <div className="subheader wrapper" style={{ padding: '10px 30px' }}>
    <Row noGutters className="align-items-center">
      <Col>
        <a className="link-no-style mr-4" href="mailto:cheerod@gmail.com">
          <FontAwesomeIcon className="mr-2" icon={['fas', 'envelope']} />
          cheerod@gmail.com
        </a>
        <a className="link-no-style" href="tel:+380950986113">
          <FontAwesomeIcon className="mr-2" icon={['fas', 'phone-alt']} />
          +380 95 098 61 13
        </a>
      </Col>
      <Col>
        <Row className="justify-content-end" style={{ fontSize: 20 }}>
          <FontAwesomeIcon className="mr-5" icon={['fab', 'facebook']} size="lg" color="blue" />
          <FontAwesomeIcon className="mr-5" icon={['fab', 'youtube']} size="lg" color="red" />
          <FontAwesomeIcon className="mr-5" icon={['fab', 'telegram-plane']} size="lg" color="#0088cc" />
          <FontAwesomeIcon className="mr-5" icon={['fab', 'twitter']} size="lg" color="#0088cc" />
        </Row>
      </Col>
    </Row>
  </div>
);

export default SubHeader;
