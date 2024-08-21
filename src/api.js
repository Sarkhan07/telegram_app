import axios from 'axios';

const API_URL = 'https://poker247tech.ru/get_horoscope/';

export const fetchHoroscope = (sign, language = 'en', period = 'today') => {
  return axios.post(API_URL, { sign, language, period });
};
