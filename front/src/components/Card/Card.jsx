import React, { useEffect, useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import style from './Card.module.css';
import api from '../../service/cards';

function Card({ data }) {
  const [isInEditing, setIsInEditing] = useState(false);
  const [card, setCard] = useState(data || {});

  useEffect(() => {
    setCard(data);
  }, [data]);

  const saveChanges = () => {
    api.updateCard(card.id, card);
  };

  const handleChangeColor = (color) => {
    setCard({ ...card, color });
  };

  const handleInputChange = (event) => {
    setCard({ ...card, body: event.target.value });
  };

  const enableEditing = () => {
    setIsInEditing(true);
  };

  const handleBlur = () => {
    saveChanges();
    setIsInEditing(false);
  };

  return (
    <div className={`${style.card} ${style[card.color]}`}>
      {isInEditing ? (
        <input
          type="text"
          autoFocus
          onBlur={handleBlur}
          value={card.body || ''}
          onChange={handleInputChange}
        />
      ) : (
        <span
          onClick={enableEditing}
          title="Click to edit" // Displays "Click to edit" on hover
          className={style.cardText}
        >
          {card.body || 'Click to edit'}
        </span>
      )}
      
      <ColorPicker color={card.color} handleChangeColor={handleChangeColor} />
    </div>
  );
}

export default Card;
