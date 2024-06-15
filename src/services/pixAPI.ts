import axios from 'axios'

export const pixAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PIX_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

pixAPI.interceptors.response.use((value) => value.data)
