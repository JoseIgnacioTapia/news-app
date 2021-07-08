import { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';

const Nave = styled.nav`
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Image = styled.img`
  width: 180px;
`;

const Nav = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const loadCodCountries = async () => {
      const response = await fetch('/country-codes_json.json');
      const data = await response.json();
      console.log(data);
      setCountries(data);
    };

    loadCodCountries();
  }, []);

  const onChangeHandler = text => {
    setCountry(text);
  };

  return (
    <Nave>
      <div className="container">
        <Image src={logo} alt="NewsApp" />
        {country}
        <input
          type="text"
          onChange={e => onChangeHandler(e.target.value)}
          value={country}
        />
      </div>
    </Nave>
  );
};

export default Nav;
