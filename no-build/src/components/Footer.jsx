import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer id={styles.continfo}>
      <nav aria-label="Supplementary">
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="Product-List.html">Products</a>
          </li>
          <li>
            <a href="Static-About.html">About</a>
          </li>
          <li>
            <a href="Contact-Us.html">Contact</a>
          </li>
        </ul>
      </nav>
      <figure>
        <figcaption>Follow us</figcaption>
        <ul>
          <li>
            <a href="#" target="_blank">
              <img src="images/icon-instagram-white.svg" width="30" height="30" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="images/icon-facebook-white.svg" width="30" height="30" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="images/icon-twitter-white.svg" width="30" height="30" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="images/icon-youtube-white.svg" width="30" height="30" alt="YouTube" />
            </a>
          </li>
        </ul>
      </figure>
      <img
        src="images/logo-big-star-H.svg"
        width="120"
        height="65"
        alt="Logo of Big Star Collectibles"
      />
      <p>
        <small>
          &copy; Big Star Collectibles, Inc. &nbsp;|&nbsp; <a href="#">Privacy</a> &nbsp;|&nbsp;{' '}
          <a href="#">Terms</a>
        </small>
      </p>
      <p>
        <small>
          This is a fictitious company created by LinkedIn Corporation, or its affiliates, solely
          for the creation and development of educational training materials. Any resemblance to
          real products or services is purely coincidental. Information provided about the products
          or services is also fictitious and should not be construed as representative of actual
          products or services on the market in a similar product or service category.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
