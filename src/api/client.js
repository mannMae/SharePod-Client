import axios from 'axios'

const client = axios.create();

client.defaults.baseUrl = 'http://localhost:4000';

export default client