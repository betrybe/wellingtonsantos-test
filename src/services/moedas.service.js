import http from '../config/http';

const pegarTodasMoedas = () => http.get('/json/all');

export {
  pegarTodasMoedas,
};
