import { useState } from 'react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME } from '@/constants'
import { GetAllVideosFromChannelResponse, getVideosFromPage } from '@/services'

export const useSermonsContent = (context: GetAllVideosFromChannelResponse) => {
  const [pageToken, setPageToken] = useState('')

  const toast = useToast()
  const {
    data: sermons,
    isError,
    isFetching,
    isLoading,
  } = useQuery(
    ['sermons', pageToken],
    () => getVideosFromPage(context?.playlistId, pageToken),
    {
      keepPreviousData: true,
      staleTime: QUERY_TIME,
      cacheTime: QUERY_TIME,
    },
  )

  if (isError) {
    toast({
      status: 'error',
      description: 'Falha ao carregar os vídeos, tente novamente.',
    })
  }

  const handleLoadNextSermons = async () => {
    if (!sermons?.nextPageToken) return
    window.scroll(0, 80)
    setPageToken(sermons?.nextPageToken)
  }

  const handleLoadPrevSermons = async () => {
    if (!sermons?.prevPageToken) return
    window.scroll(0, 80)
    setPageToken(sermons?.prevPageToken)
  }

  return {
    handleLoadNextSermons,
    handleLoadPrevSermons,
    sermons,
    isLoading: isFetching || isLoading,
  }
}
