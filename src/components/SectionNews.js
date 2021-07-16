import CardNews from './CardNews';
import './SectionNews.css';

const SectionNews = ({ optionSelected, data }) => {
  const newsList = data.slice(1);

  return (
    <section className="section-news">
      {newsList.map(news => {
        return (
          <CardNews
            key={news.url}
            optionSelected={optionSelected}
            news={news}
          />
        );
      })}
    </section>
  );
};

export default SectionNews;
