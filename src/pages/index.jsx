import React from 'react';
import { Container } from 'react-bootstrap';

import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Slider from '../components/Slider';

const IndexPage = ({ data }) => (
  <Layout pageInfo={{ pageName: 'index' }}>
    <SEO title="Home" keywords={['gatsby', 'react', 'bootstrap']} />
    <Slider images={data.allFile.edges} />
    <Container className="text-center">
      {/* создавай тут секции */}
      <div />
    </Container>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
query IndexPage {
  allFile(filter: {relativeDirectory: {eq: "slides"}}) {
    edges {
      node {
        id
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
    }
  }
}
`;
