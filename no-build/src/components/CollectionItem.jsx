import React from 'react';
import PropTypes from 'prop-types';
import styles from './Collection.module.css';

export const CollectionItem = ({ data }) => {
  return (
    <div data-full-img={data.dataFullImg}>
      <dt id={styles['name-delores']}>{data.name}</dt>
      <dd className={styles.title}>{data.title}</dd>
      <dd className={styles.avatar}>
        <img
          src={data.avatar.src}
          srcSet={data.avatar.srcSet}
          width={data.avatar.width}
          height={data.avatar.height}
          alt={data.avatar.alt}
        />
      </dd>
      <dd className={styles.desc}>{data.desc}</dd>
      <dd>
        <a href={data.button.href}>See bio and products</a>
      </dd>
    </div>
  );
};

export default CollectionItem;

CollectionItem.propTypes = {
  data: PropTypes.object.isRequired
};
