import http from './http';

const api = {
    getCards: () => http.get('/cards'),
    getCard: id => http.get(`/cards/${id}`),
    createCard: card => http.post('/cards', card),
    updateCard: (id, card) => http.put(`/cards/${id}`, card),
    deleteCard: id => http.delete(`/cards/${id}`)
}

export default api;