import { useCategory } from '../hooks/useCategory';
import { capitalize } from '../helpers/capitalize';
import './CardNews.css';
import Link from './Link';

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
  const Category = useCategory(category, optionSelected);

  return (
    <article className="card">
      {imagen}
      <Category className="category" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link url={url} />
    </article>
  );
};

export default CardNews;
