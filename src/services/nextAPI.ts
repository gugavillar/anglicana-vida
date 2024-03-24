import axios from 'axios'

const nextAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
})

nextAPI.interceptors.response.use((value) => value.data)

type GetLiveStreamReturn = {
  kind: string
  etag: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Array<any>
}

export const getLiveStream = async (): Promise<GetLiveStreamReturn> =>
  await nextAPI.get('/live-video')
