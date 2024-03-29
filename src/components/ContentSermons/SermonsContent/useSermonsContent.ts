import { useState, RefObject, useEffect, useCallback } from 'react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME_FIVE_HOURS } from '@/constants'
import { GetAllVideosFromChannelResponse, getVideosFromPage } from '@/services'

const options = {
  threshold: 0.5,
  root: null,
  rootMargin: '0%',
}

export const useSermonsContent = (
  context: GetAllVideosFromChannelResponse,
  ref: RefObject<Element>,
) => {
  const [pageToken, setPageToken] = useState<string>('')
  const [sermonsData, setSermonsData] =
    useState<GetAllVideosFromChannelResponse['items']>()
  const [isIntersecting, setIntersecting] = useState(true)
  const toastId = 'sermons-error'
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
    staleTime: QUERY_TIME_FIVE_HOURS,
  })

  if (isError || sermons?.error) {
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        status: 'error',
        description: 'Falha ao carregar os vídeos, tente novamente.',
      })
    }
  }

  const isLoadingData = isFetching || isLoading

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      const boundingRect = entry.boundingClientRect
      const intersectionRect = entry.intersectionRect

      if (sermons?.error) return

      if (
        !isLoadingData &&
        entry.isIntersecting &&
        intersectionRect.bottom - boundingRect.bottom <= options.threshold
      ) {
        const newSermonsData = !sermonsData
          ? sermons?.items
          : !sermons?.items
            ? sermonsData
            : [...sermonsData, ...sermons?.items]
        setIntersecting(entry.isIntersecting)
        setPageToken(sermons?.nextPageToken as string)
        setSermonsData(newSermonsData)
      }
    },
    [
      isLoadingData,
      sermons?.error,
      sermons?.items,
      sermons?.nextPageToken,
      sermonsData,
    ],
  )

  useEffect(() => {
    const initObserver = () => {
      const observer = new IntersectionObserver(handleIntersection, options)

      if (ref.current) {
        observer.observe(ref.current)
      }
      return observer
    }

    const observeRef = initObserver()

    return () => {
      observeRef.disconnect()
    }
  }, [handleIntersection, ref])

  return {
    sermonsData,
    isIntersecting,
    isLoading,
  }
}
