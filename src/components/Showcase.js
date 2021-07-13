import React from 'react';

const Showcase = ({ optionSelected, data }) => {
  // Extracting Information
  const { urlToImage, url, title, description, source } = data;

  let category =
    optionSelected.charAt(0).toUpperCase() + optionSelected.slice(1);

  return (
    <header id="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-content">
            <div className="category category-sports">{category}</div>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={url} className="btn btn-primary" target="_blank">
              Read More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Showcase;
