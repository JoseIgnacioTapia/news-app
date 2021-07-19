import React from 'react';

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    backgroundColor: bgColor,
  };

  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
