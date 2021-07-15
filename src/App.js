import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Message from './components/Message';
import Showcase from './components/Showcase';
import Loader from './components/Loader';
import SectionNews from './components/SectionNews';
import './App.css';

function App() {
  const [codCountrySelected, saveCodCountrySelected] = useState(null);
  const [optionSelected, saveOptionSelected] = useState(null);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = `https://newsapi.org/v2/top-headlines?country=${codCountrySelected}&category=${optionSelected}&apiKey=4dc2f56899c94121919a5ba5b43406d8`;

  useEffect(() => {
    // Cleaning the screen
    setData([]);

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          let err = new Error('Error en la petición');
          err.status = res.status || '00';
          err.statusText = res.statusText || 'Ocurrió un error';
          throw err;
        }

        const json = await res.json();
        setData(json.articles);
      } catch (error) {
        setData(null);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="container">
      <Nav
        saveOptionSelected={saveOptionSelected}
        saveCodCountrySelected={saveCodCountrySelected}
      />
      {loading && <Loader />}
      {codCountrySelected === '' ? (
        <Message msg="You must enter a country" bgColor="#dc3545" />
      ) : null}
      {data.length > 0 ? (
        <>
          <Showcase optionSelected={optionSelected} data={data[0]} />
          <SectionNews optionSelected={optionSelected} data={data} />
        </>
      ) : null}
    </div>
  );
}

export default App;
