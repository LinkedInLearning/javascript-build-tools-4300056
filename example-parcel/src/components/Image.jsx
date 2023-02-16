import React from 'react';
import PropTypes from 'prop-types';
import * as imgURIs from '../../public/images/**/*.*';

const dynImg = (imgData, folder, type) => {
  let requestURI;
  if (folder) {
    requestURI = imgURIs[folder][imgData.root][type];
  } else {
    requestURI = imgURIs[imgData.root][type];
  }
  return new URL(`${requestURI}`, import.meta.url);
};

export const Image = ({ imgData, folder, type }) => {
  return (
    <img
      src={dynImg(imgData, folder, type)}
      width={imgData.width || 200}
      height={imgData.height || 200}
      alt={imgData.alt || ''}
    />
  );
};

export default Image;

Image.propTypes = {
  imgData: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  folder: PropTypes.string,
  type: PropTypes.string.isRequired
};
