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
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['sermons', context?.playlistId, context?.nextPageToken],
    queryFn: getVideosFromPage,
    staleTime: QUERY_TIME_FIVE_HOURS,
    initialData: () => ({ pages: context ? [context] : [], pageParams: [] }),
    getNextPageParam: (lastPage) => lastPage?.nextPageToken || false,
  })

  const sermonsFetchError =
    !context || sermons?.pages?.some((page) => page?.error)

  if (isError || sermonsFetchError) {
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        status: 'error',
        description: 'Falha ao carregar os vídeos, tente novamente.',
      })
    }
  }

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  return {
    sermons,
    isLoading: isFetching || isFetchingNextPage,
    ref,
    hasNextPage,
  }
}
