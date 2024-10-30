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


  const saveChanges = (updatedCard) => {
    console.log('save changes', updatedCard);
    api.updateCard(card.id, updatedCard);
  };

  const handleColorChange = (color) => {
    console.log('handleColorChange', color);
    const updatedCard = { ...card, color };
    setCard(updatedCard);
    saveChanges(updatedCard);
  };

  const handleInputChange = (event) => {
    setCard({ ...card, body: event.target.value });
  };

  const enableEditing = () => {
    setIsInEditing(true);
  };

  const handleBlur = (event) => {
    event.preventDefault();
    saveChanges({ ...card, body: event.target.value });
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
      <ColorPicker color={card.color} handleColorChange={handleColorChange} />
    </div>
  );
}

export default Card;
