import React from 'react';
import './Showcase.css';
import { useCategory } from '../hooks/useCategory';
import { capitalize } from '../helpers/capitalize';

const Showcase = ({ optionSelected, data }) => {
  // Extracting Information
  const { urlToImage, url, title, description } = data;

  let category = capitalize(optionSelected);

  let styles = {
    backgroundImage: `url(${urlToImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  // Custom Hook
  const Category = useCategory(category, optionSelected);

  return (
    <div style={styles} className="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-content">
            {/* <div className="category ">{category}</div> */}
            <Category />
            <h1>{title}</h1>
            <p>{description}</p>
            <a
              href={url}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
