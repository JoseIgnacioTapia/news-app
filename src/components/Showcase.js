import React from 'react';
import './Showcase.css';
import { useCategory } from '../hooks/useCategory';
import { capitalize } from '../helpers/capitalize';

const Showcase = ({ optionSelected, data }) => {
  // Extracting Information
  const { image, url, title, description } = data;

  let category = capitalize(optionSelected);

  // Custom Hook
  const Category = useCategory(category, optionSelected);

  return (
    <div className="showcase">
      <img
        src={image}
        alt="News Image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '50vh',
          width: '100%',
        }}
      />
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-content">
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
