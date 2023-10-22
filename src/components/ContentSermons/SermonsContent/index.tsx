import { Fragment } from 'react'

import { SimpleGrid, Skeleton } from '@chakra-ui/react'

import { PageLoader, VideoCard } from '@/components'

import { GetAllVideosFromChannelResponse } from '@/services'

import { ActionButtons } from './ActionButtons'
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
      <ActionButtons
        handleLoadNextSermons={handleLoadNextSermons}
        handleLoadPrevSermons={handleLoadPrevSermons}
        nextPageToken={sermons?.nextPageToken}
        prevPageToken={sermons?.prevPageToken}
      />
    </Fragment>
  )
}
