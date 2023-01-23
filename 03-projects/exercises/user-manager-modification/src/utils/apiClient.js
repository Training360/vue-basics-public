import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Access-Control-Allow-Credentials': true,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default apiClient
