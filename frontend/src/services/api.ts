import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true
})

// Interceptor pra anexar o token em TODA requisição autenticada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('kodan_token')

  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
