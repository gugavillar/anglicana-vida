import axios from 'axios'

const youtubeAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_YOUTUBE_URL,
})

type YoutubeAPIChannelsType = {
  items: Array<{
    contentDetails: {
      relatedPlaylists: {
        uploads: string
      }
    }
  }>
}

type Snippet = {
  publishedAt: TDateISOWithoutMilliseconds
  channelId: string
  title: string
  description: string
  thumbnails: {
    default: {
      url: string
      width: number
      height: number
    }
    medium: {
      url: string
      width: number
      height: number
    }
    high: {
      url: string
      width: number
      height: number
    }
    standard: {
      url: string
      width: number
      height: number
    }
    maxres: {
      url: string
      width: number
      height: number
    }
  }
  channelTitle: string
  playlistId: string
  position: number
  resourceId: {
    kind: string
    videoId: string
  }
  videoOwnerChannelTitle: string
  videoOwnerChannelId: string
}

export type GetAllVideosFromChannelResponse = {
  playlistId: string
  kind: string
  etag: string
  nextPageToken: string
  prevPageToken?: string
  items: Array<{
    kind: string
    etag: string
    id: string
    snippet: Snippet
  }>
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export const getAllVideosFromChannel = async (
  APIKey: string,
  channelId: string,
  maxResults = 5,
): Promise<GetAllVideosFromChannelResponse> => {
  const channelData = await youtubeAPI.get<YoutubeAPIChannelsType>(
    '/channels',
    {
      params: {
        key: APIKey,
        id: channelId,
        part: 'snippet,contentDetails',
      },
    },
  )
  const playlistId =
    channelData.data.items[0].contentDetails.relatedPlaylists.uploads

  const videos = await youtubeAPI.get('/playlistItems', {
    params: {
      key: APIKey,
      playlistId,
      part: 'snippet',
      maxResults,
    },
  })

  return { ...videos.data, playlistId }
}

export const getVideosFromPage = async (
  playlistId: string,
  pageToken: string,
): Promise<GetAllVideosFromChannelResponse> => {
  const response = await axios.post('/api/videos', {
    data: { playlistId, pageToken },
  })

  return { ...response.data, playlistId }
}
