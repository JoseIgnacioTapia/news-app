import CardNews from './CardNews';

const SectionNews = ({ optionSelected, data }) => {
  const newsList = data.slice(1);

  let styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
  };

  return (
    <section style={styles}>
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
