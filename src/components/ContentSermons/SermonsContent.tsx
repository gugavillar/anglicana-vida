import { Fragment, useState } from 'react'

import {
  Button,
  Flex,
  SimpleGrid,
  Skeleton,
  useBoolean,
  useToast,
} from '@chakra-ui/react'

import { VideoCard } from '@/components'

import { GetAllVideosFromChannelResponse, getVideosFromPage } from '@/services'

type SermonsContentsProps = {
  context: GetAllVideosFromChannelResponse
}

const buttonCommonProps = {
  bg: 'gray.700',
  color: 'white',
  height: 12,
  width: 32,
  _hover: {
    opacity: 0.8,
  },
  _disabled: {
    bg: 'gray.700',
    opacity: 0.8,
  },
}

export const SermonsContents = ({ context }: SermonsContentsProps) => {
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

  return (
    <Fragment>
      <SimpleGrid
        minChildWidth={{ base: 'full', md: '20rem', lg: '32rem' }}
        spacing={12}
        width="full"
      >
        {sermons.items.map((item) => (
          <Skeleton
            key={item.id}
            isLoaded={!isLoading}
            width={{ base: 'full', md: 'xs', lg: 'md' }}
            borderRadius={8}
            mx="auto"
          >
            <VideoCard
              width={{ base: 'full', md: 'xs', lg: 'md' }}
              minHeight={{ base: 'xs', md: 'md', lg: 'md' }}
              data={item.snippet}
            />
          </Skeleton>
        ))}
      </SimpleGrid>
      <Flex
        align="center"
        justify="space-between"
        maxWidth="65rem"
        width="full"
        mt={6}
        mx="auto"
      >
        <Button
          isDisabled={!sermons?.prevPageToken}
          onClick={handleLoadPrevSermons}
          {...buttonCommonProps}
        >
          Anterior
        </Button>
        <Button
          isDisabled={!sermons?.nextPageToken}
          onClick={handleLoadNextSermons}
          {...buttonCommonProps}
        >
          Próximo
        </Button>
      </Flex>
    </Fragment>
  )
}
