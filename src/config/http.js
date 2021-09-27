import axios from 'axios';

const urlPadrao = 'https://economia.awesomeapi.com.br';

const http = axios.create({
  baseURL: urlPadrao,
});

export default http;
