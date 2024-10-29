import React, { useEffect, useState } from 'react'
import ColorPicker from '../ColorPicker/ColorPicker';
import style from './Card.module.css'
import api from '../../service/cards';

function Card({data}) {

  const [isInEditing, setIsInEditing] = useState(false);
  const [card, setCard] = useState({});

  useEffect(() => setCard(data),[data]);

  const saveChanges  = ()=>{
    api.updateCard(card.id, card);
  };

  const toggleState = () => {
    if(isInEditing)
      saveChanges();
    setIsInEditing(!isInEditing);
  }

  const handleChangeColor = (color) => {
    setCard({...card, color: color});
  };

  return (
    <div className={`${style.card} ${style[data.color]}`}>
        <input type='text' disabled={!isInEditing} onClick={()=>toggleState()} value={data.body}></input>
        <ColorPicker color = {data.color} handleChangeColor={handleChangeColor}/>
    </div>
  )
}

export default Card