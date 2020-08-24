import React from 'react';
import { Link } from 'gatsby';

import {
  Navbar, Nav,
} from 'react-bootstrap';

const CustomNavbar = ({ pageInfo }) => (
  <Navbar bg="transparent" expand="lg" id="site-navbar">
    {/* <Container> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="mr-6" id="basic-navbar-nav">
      <Nav activeKey={pageInfo && pageInfo.pageName}>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            Главная
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="mr-6" id="basic-navbar-nav">
      <Nav activeKey={pageInfo && pageInfo.pageName}>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            Новости
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="mr-6" id="basic-navbar-nav">
      <Nav activeKey={pageInfo && pageInfo.pageName}>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            Клубы
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="mr-6" id="basic-navbar-nav">
      <Nav activeKey={pageInfo && pageInfo.pageName}>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            Тренера
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="mr-6" id="basic-navbar-nav">
      <Nav activeKey={pageInfo && pageInfo.pageName}>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            О нас
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav activeKey={pageInfo && pageInfo.pageName}>
        <Link to="/page-2" className="link-no-style">
          <Nav.Link as="span" eventKey="page-2">
            Контакты
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
);

export default CustomNavbar;
