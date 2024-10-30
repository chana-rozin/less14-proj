import './App.css';
import { useEffect, useState } from 'react';
import api from './service/cards';
import Card from './components/Card/Card';
import { FaPlus } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {
      await api.getCards()
        .then(res => setCards(res.data))
        .catch(err => toast.error('Fetch failed'));
    }
    fetchCard();
  }, [])


  const newCard = async () => {
    await api.createCard({ body: "new card", color: "lightGray" })
      .then(res => setCards([...cards, res.data]))
      .catch(err => toast.error('Failed to create card'));
  }

  const handleDelCard = async (id) => {
    await api.deleteCard(id)
      .then(() => setCards(cards.filter(card => card.id !== id)))
      .catch(err => toast.error('Error deleting card'));
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className='newCardBtn'>
        <FaPlus onClick={() => newCard()} />
        </div>
        {cards && cards.map(card => <Card key={card.id} data={card} handleDelCard={handleDelCard} />)}
      </div>
    </>
  );
}

export default App;
