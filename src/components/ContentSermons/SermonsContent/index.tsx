import { Fragment, useRef } from 'react'

import { SimpleGrid, Skeleton } from '@chakra-ui/react'

import { VideoCard } from '@/components'

import { GetAllVideosFromChannelResponse } from '@/services'

import { useSermonsContent } from './useSermonsContent'

type SermonsContentsProps = {
  context: GetAllVideosFromChannelResponse
}

export const SermonsContents = ({ context }: SermonsContentsProps) => {
  const divRef = useRef(null)
  const { sermonsData, isLoading, isIntersecting } = useSermonsContent(
    context,
    divRef,
  )

  return (
    <Fragment>
      <SimpleGrid
        minChildWidth={{ base: 'full', md: '20rem', lg: 'xs' }}
        flex={1}
        spacing={8}
        width="full"
      >
        {sermonsData?.map((item) => (
          <Skeleton
            key={item.id}
            isLoaded={!isLoading}
            borderRadius={8}
            mx="auto"
            width="full"
            flex={1}
          >
            <VideoCard videoObjectProperty={item.snippet} height="full" />
          </Skeleton>
        ))}
      </SimpleGrid>
      {isIntersecting && !isLoading && <div ref={divRef}></div>}
    </Fragment>
  )
}
