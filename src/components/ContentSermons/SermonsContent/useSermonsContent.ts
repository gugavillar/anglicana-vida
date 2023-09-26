import { useState } from 'react'

import { useBoolean, useToast } from '@chakra-ui/react'

import { GetAllVideosFromChannelResponse, getVideosFromPage } from '@/services'

export const useSermonsContent = (context: GetAllVideosFromChannelResponse) => {
  const [sermons, setSermons] = useState(context)
  const [isLoading, setIsLoading] = useBoolean()

  const toast = useToast()

  const handleLoadNextSermons = async () => {
    if (!sermons?.nextPageToken) return
    try {
      setIsLoading.on()
      const response = await getVideosFromPage(
        sermons.playlistId,
        sermons.nextPageToken,
      )
      setSermons(response)
    } catch {
      toast({
        status: 'error',
        description: 'Falha ao carregar os vídeos, tente novamente.',
      })
    } finally {
      setIsLoading.off()
    }
  }

  const handleLoadPrevSermons = async () => {
    if (!sermons?.prevPageToken) return
    try {
      setIsLoading.on()
      const response = await getVideosFromPage(
        sermons.playlistId,
        sermons?.prevPageToken as string,
      )
      setSermons(response)
    } catch {
      toast({
        status: 'error',
        description: 'Falha ao carregar os vídeos, tente novamente.',
      })
    } finally {
      setIsLoading.off()
    }
  }

  return { handleLoadNextSermons, handleLoadPrevSermons, isLoading, sermons }
}
