import axios, { AxiosRequestConfig } from 'axios'

const ibgeAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IBGE_API,
})

type StateReturnAPI = {
  id: number
  sigla: string
  nome: string
}

const formatStatesForSelectField = (states: Array<StateReturnAPI>) =>
  states.map((state) => ({ label: state.nome, value: state.sigla }))

export const getBrazilianStatesToSelectField = async () => {
  const response = await ibgeAPI.get<Array<StateReturnAPI>>(
    '/estados?orderBy=nome',
  )
  const formattedData = formatStatesForSelectField(response.data)
  return formattedData
}

type CitiesReturnAPI = {
  nome: string
}

const formatCitiesForSelectField = (cities: Array<CitiesReturnAPI>) =>
  cities.map((city) => ({ label: city.nome, value: city.nome }))

export const getCitiesByStateToSelectField = async (
  state: string,
  config: AxiosRequestConfig,
) => {
  const response = await ibgeAPI.get<Array<CitiesReturnAPI>>(
    `/estados/${state}/municipios?orderBy=nome`,
    {
      ...config,
    },
  )
  const formattedData = formatCitiesForSelectField(response.data)
  return formattedData
}
