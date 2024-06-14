import { useEffect } from 'react'

import { useToast } from '@chakra-ui/react'

import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from 'react-query'

import { QUERY_TIME_FIVE_HOURS } from '@/constants'
import { GetAllVideosFromChannelResponse, getVideosFromPage } from '@/services'

export const useSermonsContent = (context: GetAllVideosFromChannelResponse) => {
  const { ref, inView } = useInView()
  const toastId = 'sermons-error'
  const toast = useToast()

  const {
    data: sermons,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery({
    queryKey: ['sermons', context?.playlistId, context?.nextPageToken],
    queryFn: getVideosFromPage,
    staleTime: QUERY_TIME_FIVE_HOURS,
    initialData: () => ({ pages: context ? [context] : [], pageParams: [] }),
    retry: 0,
    getNextPageParam: (lastPage) => lastPage?.nextPageToken || false,
    onError: () => {
      if (!toast.isActive(toastId)) {
        toast({
          id: toastId,
          status: 'error',
          description: 'Falha ao carregar os vídeos, tente novamente.',
        })
      }
    },
  })

  useEffect(() => {
    if (inView && !isError) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView, isError])

  return {
    sermons,
    isLoading: isFetching || isFetchingNextPage,
    ref,
    hasNextPage,
  }
}
