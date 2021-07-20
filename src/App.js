import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Message from './components/Message';
import Showcase from './components/Showcase';
import Loader from './components/Loader';
import SectionNews from './components/SectionNews';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [codCountrySelected, saveCodCountrySelected] = useState(null);
  const [optionSelected, saveOptionSelected] = useState('breaking-news');

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = `https://gnews.io/api/v4/top-headlines?country=${codCountrySelected}&topic=${optionSelected}&token=9eccf917d81a015e55f719ce3fdc3354`;

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
      {error && <p>Hay un error</p>}
      {codCountrySelected === '' ? (
        <Message
          msg="Sorry, you must enter an available country. Try again please"
          bgColor="#dc3545"
        />
      ) : null}
      {data.length > 0 && codCountrySelected !== '' ? (
        <>
          <Showcase optionSelected={optionSelected} data={data[0]} />
          <SectionNews optionSelected={optionSelected} data={data} />
        </>
      ) : null}
      <Footer />
    </div>
  );
}

export default App;

// Pending: warning for error state & showcase image
