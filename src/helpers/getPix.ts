import { pixAPI } from '@/services/pixAPI'

const QUERY_PARAMS = {
  nome: 'Igreja Anglicana Vida',
  cidade: 'Gravatá',
  saida: 'br',
  chave: 'grsv.21@gmail.com',
}

export const getPix = async (value: string) => {
  const queryParams = new URLSearchParams({ ...QUERY_PARAMS, valor: value })
  try {
    const response = await pixAPI.get('/v1', { params: queryParams })
    return response
  } catch (error) {
    console.error(error)
  }
}
