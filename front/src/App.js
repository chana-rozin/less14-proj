import './App.css';
import { useEffect, useState } from 'react';
import api from './service/cards';
import Card from './components/Card/Card';
import { FaPlus } from "react-icons/fa";


function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {
      const res = await api.getCards();
      console.log(res.data);
      setCards(res.data);

    }
    fetchCard();
  }, [])


  const newCard = async () => {
    const res = await api.createCard({ body: "new card" });
    console.log(res.data);
    setCards([...cards, res.data]);
  }

  return (
    <div className="container">
      {cards && cards.map(card => <Card key={card.id} data={card} />)}
      <div className='newCardBtn'>
      <FaPlus onClick={() => newCard()} />
      </div>
    </div>
  );
}

export default App;
