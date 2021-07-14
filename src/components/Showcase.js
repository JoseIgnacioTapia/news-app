import React from 'react';
// import './Showcase.css';
import styled from 'styled-components';

const Showcase = ({ optionSelected, data }) => {
  // Extracting Information
  const { urlToImage, url, title, description, source } = data;

  let category =
    optionSelected.charAt(0).toUpperCase() + optionSelected.slice(1);

  const Header = styled.header`
    color: #fff;
    background: #333;
    padding: 2rem;
    position: relative;

    .showcase-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
      height: 50vh;

      .showcase-content {
        z-index: 1;

        p {
          margin-bottom: 1rem;
        }
      }
    }

    &:before {
      content: '';
      background: url(${urlToImage}) no-repeat center center/cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.4;
    }
  `;

  return (
    <Header>
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
    </Header>
  );
};

export default Showcase;
