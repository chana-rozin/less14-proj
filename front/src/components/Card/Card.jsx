import React, { useEffect, useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import style from './Card.module.css';
import api from '../../service/cards';
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

function Card({ data, handleDelCard }) {
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
      {isInEditing ? <>
        <textarea
          type="text"
          autoFocus
          onBlur={handleBlur}
          value={card.body || ''}
          onChange={handleInputChange}
          className={style.cardText} />
        </>
        : (
          <span
            onClick={enableEditing}
            title="Click to edit" // Displays "Click to edit" on hover
            className={style.cardText}
          >
            {card.body || 'Click to edit'}
          </span>
        )}
      <div className={style.controller}>
        <AiFillDelete className={style.icon} onClick={()=>handleDelCard(card.id)} />
        <MdEdit className={style.icon} onClick={enableEditing} />
        <ColorPicker color={card.color} handleColorChange={handleColorChange} />
      </div>
    </div>
  );
}

export default Card;
