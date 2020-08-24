import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Img from 'gatsby-image';
import { Col, Row } from 'react-bootstrap';
import CustomNavbar from './NavBar';
import SubHeader from './SubHeader';

const Header = () => {
  const logo = useStaticQuery(graphql`
  query Header {
    imageSharp (fluid: {originalName: {eq: "star-logo-template-vector-icon-illustration-design.png"}}) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`);
  return (
    <>
      <SubHeader />
      <header
        style={{
          backgroundImage: 'linear-gradient(-268deg, #f80000 0%, #ffffff 50%, #fdbe01 100%)',
        }}
      >
        <div className="wrapper">
          <Row noGutters className="justify-content-center align-items-center">
            <Col bsPrefix="col-2">
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Img
                    style={{
                      width: 134,
                      height: 83,
                      transform: 'rotate(20deg)',
                    }}
                    fluid={logo.imageSharp.fluid}
                  />
                  <span className="logo__text">
                    Одесская
                    <br />
                    Федерация
                    <br />
                    Черлидинга
                  </span>
                </Link>
              </h1>
            </Col>
            <Col>
              <CustomNavbar />
            </Col>
          </Row>

        </div>
      </header>
    </>
  );
};
Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
