import React, { useState } from 'react';
import Img from 'gatsby-image';

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  // Minus 1 for array offset from 0
  const length = images.length - 1;
  const handleNext = () => (index === length ? setIndex(0) : setIndex(index + 1));
  const handlePrevious = () => (index === 0 ? setIndex(length) : setIndex(index - 1));
  const { node } = images[index];
  return (
    <>
      <Img
        style={{
          height: '80vh',
        }}
        fluid={node?.childImageSharp?.fluid}
        key={node?.id}
      />
      <div>
        <button
          type="button"
          onClick={() => handlePrevious()}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Slider;
