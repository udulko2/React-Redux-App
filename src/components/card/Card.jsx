import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate()

  return (
    <div>
      <div>Repo card</div>
      <button onClick={() => navigate(-1)} className="back-btn">BACK</button>
    </div>
  );
};

export default Card;