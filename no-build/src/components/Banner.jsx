import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Banner.css';

export const Banner = () => {
  return (
    <Splide hasTrack={false} id="hero" className="splide" aria-label="Hero section">
      <SplideTrack>
        <SplideSlide className="big-star">
          <div className="wrapper">
            <img
              src="images/logo-big-star-H-purple.svg"
              width="298"
              height="161"
              alt="Logo of Big Star Collectibles"
            />
            <a href="Product-List.html" className="button lg solid gold">
              Shop now
            </a>
          </div>
          <img
            src="images/hero-big-star.jpg"
            srcSet="images/hero-big-star.jpg 1x, images/hero-big-star@2x.jpg 2x, images/hero-big-star@3x.jpg 3x"
            width="485"
            height="317"
            alt=""
          />
        </SplideSlide>
        <SplideSlide className="sale">
          <div className="wrapper">
            <h2>Seasonal Sale!</h2>
            <p>Enjoy up to 20% off select items.</p>
            <a href="Product-List.html" className="button lg solid white">
              See items on sale
            </a>
          </div>
          <img
            src="images/hero-sale.jpg"
            srcSet="images/hero-sale.jpg 1x, images/hero-sale@2x.jpg 2x, images/hero-sale@3x.jpg 3x"
            width="502"
            height="367"
            alt=""
          />
        </SplideSlide>
        <SplideSlide className="gifts">
          <div className="wrapper">
            <h2>Gifts for Everyone!</h2>
            <p>
              Shop our collections
              <br /> to find that perfect collectible.
            </p>
            <a href="Product-List.html" className="button lg solid gold">
              Shop now
            </a>
          </div>
          <img
            src="images/hero-gifts.jpg"
            srcSet="images/hero-gifts.jpg 1x, images/hero-gifts@2x.jpg 2x, images/hero-gifts@3x.jpg 3x"
            width="750"
            height="465"
            alt=""
          />
        </SplideSlide>
      </SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <img src="images/icon-chevron-left-white.svg" alt="Previous" />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <img src="images/icon-chevron-left-white.svg" alt="Next" />
        </button>
      </div>
    </Splide>
  );
};

export default Banner;
