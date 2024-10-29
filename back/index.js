express = require('express');
cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/cards', (req, res) => {
    console.log('get cards');
    res.send(DB.cards);
});

app.get('/cards/:id', (req, res) => {
    console.log('get card',req.params.id);
    res.send(DB.cards.find(card=>card.id===req.params.id));
});

app.post('/cards', (req, res) => {
    console.log('post card',req.body);
    const newCard = {id:`${DB.runnerId++}`,...req.body}
    DB.cards.push(newCard);
    res.send(newCard);
});

app.delete('/cards/:id', (req, res) => {
    console.log('delete card',req.params.id);
    DB.cards = DB.cards.filter(card=>card.id!==req.params.id);
    res.sendStatus(204);
});

app.put('/cards/:id', (req, res) => {
    console.log('update card',req.params.id,req.body);
    const index = DB.cards.findIndex(card=>card.id===req.params.id);
    if(index>-1) DB.cards[index] = {...DB.cards[index],...req.body};
    res.send(DB.cards[index]);
});

app.patch('/cards/:id', (req, res) => {
    console.log('partial update card',req.params.id,req.body);
    const index = DB.cards.findIndex(card=>card.id===req.params.id);
    if(index>-1) DB.cards[index] = {...DB.cards[index],...req.body};
    res.send(DB.cards[index]);
});

app.listen(8080, () => console.log('listening on 8080'));

const DB = {cards:[
    { id: '1', body: 'This is card number 1', color: 'orange' },
    { id: '2', body: 'This is card number 2', color: 'blue' },
    { id: '3', body: 'This is card number 3', color: 'green' },
    { id: '4', body: 'This is card number 4', color: 'green' },
    { id: '5', body: 'This is card number 5', color: 'purple' },
    { id: '6', body: 'This is card number 6', color: 'orange' },
    { id: '7', body: 'This is card number 7', color: 'blue' },
    { id: '8', body: 'This is card number 8', color: 'orange' },
    { id: '9', body: 'This is card number 9', color: 'blue' },
    { id: '10', body: 'This is card number 10', color: 'green' }],
    runnerId: 11
};
