import { useState, useEffect } from 'react';
import './Nav.css';
import logo from '../img/logo.png';
import styled from 'styled-components';
import { useSelect } from '../hooks/useSelect';

const Nave = styled.nav`
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Image = styled.img`
  width: 180px;
  height: 50px;
`;

const Nav = ({ saveOptionSelected, saveCodCountrySelected }) => {
  const OPTIONS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
  ];

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [codCountry, setCodCountry] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Custom Hook
  const [option, SelectOptions] = useSelect('general', OPTIONS);

  useEffect(() => {
    const loadCodCountries = async () => {
      const response = await fetch('/country-codes_json.json');
      const data = await response.json();
      console.log(data);
      setCountries(data);
    };

    loadCodCountries();
  }, []);

  const onSuggestHandler = text => {
    setCountry(text);
    setSuggestions([]);
  };

  // Submit to the form to pass the category to App.js
  const searchNews = e => {
    e.preventDefault();
    saveCodCountrySelected(codCountry.toLowerCase());
    saveOptionSelected(option);
  };

  const onChangeHandler = text => {
    let matches = [];
    if (text.length > 0) {
      matches = countries.filter(country => {
        const regex = new RegExp(`${text}`, 'gi');
        return String(country['CLDR display name']).match(regex);
      });
    }
    console.log('matches', matches);
    setSuggestions(matches);
    setCountry(text);
  };

  return (
    <Nave>
      <div className="container-nav">
        <Image src={logo} alt="NewsApp" />
        <form onSubmit={searchNews} className="container-form">
          <input
            type="text"
            placeholder="Please type a country"
            onChange={e => onChangeHandler(e.target.value)}
            value={country}
            onBlur={() => {
              setTimeout(() => {
                setSuggestions([]);
              }, 100); // Waiting for one click
            }}
          />

          <SelectOptions />
          <input type="submit" value="Search" className="btn-search" />
        </form>
      </div>
      <div className="container-suggestion">
        {suggestions &&
          suggestions.map((suggestion, i) => (
            <div
              className="suggestion"
              key={i}
              onClick={() => {
                onSuggestHandler(suggestion['CLDR display name']);
                setCodCountry(suggestion['ISO3166-1-Alpha-2']);
              }}
            >
              {suggestion['CLDR display name']}
            </div>
          ))}
      </div>
    </Nave>
  );
};

export default Nav;
