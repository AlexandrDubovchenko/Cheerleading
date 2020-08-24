import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="footer">
    <div className="wrapper d-flex">
      <Col className="footer__card">
        <h3 className="footer__card__title">Контакты</h3>
        <div className="mb-4">
          <p>
            Генерала Петрова, 57а, Одесса
            <span>(313) 748-3411</span>
          </p>
          <p>
            Красная балка, 98
            <span>(757) 569-6100</span>
          </p>
        </div>
        <p>
          <h3>Мы в соцсетях</h3>
          <span>
            <FontAwesomeIcon className="mr-3" icon={['fab', 'facebook']} size="lg" color="blue" />
            <FontAwesomeIcon className="mr-3" icon={['fab', 'youtube']} size="lg" color="red" />
            <FontAwesomeIcon className="mr-3" icon={['fab', 'telegram-plane']} size="lg" color="#0088cc" />
            <FontAwesomeIcon className="mr-3" icon={['fab', 'twitter']} size="lg" color="#0088cc" />
          </span>
        </p>
      </Col>
      <Col className="footer__card">
        <h3 className="footer__card__title">Партнерам</h3>
        <p>
          Duis aute irure dolor in reprehenderit.
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Ut enim ad minim veniam.
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Col>
      <Col className="footer__card">
        <h3 className="footer__card__title">Помощь</h3>
        <Row>
          <Col className="footer__card__col">
            <a href="/#">Публичная сфера</a>
            <a href="/#">Информация о клубах</a>
            <a href="/#">FAQ</a>
            <a href="/#">Услуги</a>
          </Col>
          <Col className="footer__card__col">
            <Link to="/#">Новости</Link>
            <Link to="/#">Блог</Link>
            <Link to="/#">О нас</Link>
            <Link to="/#">Контакты</Link>
          </Col>
        </Row>
      </Col>
    </div>
  </footer>
);

export default Footer;
