import { useState, useEffect } from 'react';

const colours = {
  general: '#577590',
  business: '#43aa8b',
  entertainment: '#f94144',
  health: '#90be6d',
  science: '#f8961e',
  sports: '#f9c74f',
  technology: '#f3722c',
};

export const useCategory = (categoryTitle, category) => {
  const [state, setState] = useState(category);

  useEffect(() => {
    setState(category);
  }, [category]);

  let styles = {
    display: 'inline-block',
    backgroundColor: colours[state],
    color: '#fff',
    fontSize: '0.55rem',
    textTransform: 'uppercase',
    padding: '0.4rem 0.6rem',
    borderRadius: '15px',
    marginBottom: '0.5rem',
  };

  const Category = () => <div style={styles}>{categoryTitle}</div>;

  return Category;
};
