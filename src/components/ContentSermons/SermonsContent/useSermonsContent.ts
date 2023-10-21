import { useState } from 'react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { GetAllVideosFromChannelResponse, getVideosFromPage } from '@/services'

export const useSermonsContent = (context: GetAllVideosFromChannelResponse) => {
  const [pageToken, setPageToken] = useState('')

  const toast = useToast()
  const {
    data: sermons,
    isError,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['sermons', pageToken],
    queryFn: () => getVideosFromPage(context?.playlistId, pageToken),
    keepPreviousData: true,
    staleTime: 60 * 5 * 60 * 1000,
    cacheTime: 60 * 5 * 60 * 1000,
  })

  if (isError) {
    toast({
      status: 'error',
      description: 'Falha ao carregar os vídeos, tente novamente.',
    })
  }

  const handleLoadNextSermons = async () => {
    if (!sermons?.nextPageToken) return
    setPageToken(sermons?.nextPageToken)
  }

  const handleLoadPrevSermons = async () => {
    if (!sermons?.prevPageToken) return
    setPageToken(sermons?.prevPageToken)
  }

  return {
    handleLoadNextSermons,
    handleLoadPrevSermons,
    sermons,
    isLoading: isFetching || isLoading,
  }
}
