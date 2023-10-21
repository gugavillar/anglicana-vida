import { Fragment } from 'react'

import { Button, Flex, SimpleGrid, Skeleton } from '@chakra-ui/react'

import { PageLoader, VideoCard } from '@/components'

import { GetAllVideosFromChannelResponse } from '@/services'

import { useSermonsContent } from './useSermonsContent'

type SermonsContentsProps = {
  context: GetAllVideosFromChannelResponse
}

export const SermonsContents = ({ context }: SermonsContentsProps) => {
  const { handleLoadNextSermons, handleLoadPrevSermons, isLoading, sermons } =
    useSermonsContent(context)

  if (isLoading) return <PageLoader />

  return (
    <Fragment>
      <SimpleGrid
        minChildWidth={{ base: 'full', md: '20rem', lg: 'xs' }}
        flex={1}
        spacing={8}
        width="full"
      >
        {sermons?.items.map((item) => (
          <Skeleton
            key={item.id}
            isLoaded={!isLoading}
            borderRadius={8}
            mx="auto"
            width="full"
            flex={1}
          >
            <VideoCard videoObjectProperty={item.snippet} />
          </Skeleton>
        ))}
      </SimpleGrid>
      <Flex
        align="center"
        justify="space-between"
        width="full"
        mt={6}
        mx="auto"
        gap={6}
        flexDir={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <Button
          width={{ base: 'full', md: 32, lg: 32 }}
          isDisabled={!sermons?.prevPageToken}
          onClick={handleLoadPrevSermons}
        >
          Anterior
        </Button>
        <Button
          width={{ base: 'full', md: 32, lg: 32 }}
          isDisabled={!sermons?.nextPageToken}
          onClick={handleLoadNextSermons}
        >
          Próximo
        </Button>
      </Flex>
    </Fragment>
  )
}
