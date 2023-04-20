import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate()

  return (
    <div style={{ color: 'red', textAlign: "center" }}>
      <div>ERROR!!!</div>
      <button onClick={() => navigate('/')}>GO TO MAIN PAGE</button>
    </div>
  );
};

export default Error;