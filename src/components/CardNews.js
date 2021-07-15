import { useCategory } from '../hooks/useCategory';
import { capitalize } from '../helpers/capitalize';
import './CardNews.css';

const CardNews = ({ optionSelected, news }) => {
  // Extracting Information
  const { urlToImage, url, title, description, source } = news;

  // Checking If It have Image
  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt="title" />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  let category = capitalize(optionSelected);

  // Custom Hook
  const [state, Category] = useCategory(category, optionSelected);

  return (
    <article className="card">
      {imagen}
      <Category />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">
        Read More
      </a>
    </article>
  );
};

export default CardNews;
