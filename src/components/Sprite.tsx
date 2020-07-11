import React from 'react';
import { v4 as uuid } from 'uuid';

const Sprite = (img: any, c: number, r: number) => {
  console.log(`here with ${img} ${c}, ${r}`);
  let xLocation = r * 48 + 16 + 8;
  let yLocation = c * 16 - 24 + 16;

  // if is odd
  if (c % 2 === 0) {
    xLocation -= 24;
  }

  return (
    <>
      <div
        key={uuid()}
        className="sprite"
        style={{
          background: `url(${img}) left center`,
          left: `${xLocation}px`,
          top: `${yLocation}px`,
        }}
      />
    </>
  );
};

export default Sprite;
