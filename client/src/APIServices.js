import axios from 'axios'

const API_URL = 'http://localhost:3000';

export class APIService{
  constructor(){
  }

  getFact() {
    const url = `${API_URL}/randomFact/`;
    return axios.get(url).then(response => response.data);
  }
}