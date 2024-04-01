import { Fragment } from 'react'

import { SimpleGrid, Skeleton } from '@chakra-ui/react'

import { VideoCard } from '@/components'

import { GetAllVideosFromChannelResponse } from '@/services'

import { useSermonsContent } from './useSermonsContent'

type SermonsContentsProps = {
  context: GetAllVideosFromChannelResponse
}

export const SermonsContents = ({ context }: SermonsContentsProps) => {
  const { sermons, ref, hasNextPage, isLoading } = useSermonsContent(context)

  return (
    <Fragment>
      <SimpleGrid
        minChildWidth={{ base: 'full', md: '20rem', lg: 'xs' }}
        flex={1}
        spacing={8}
        width="full"
      >
        {sermons?.pages?.map((page, index) => (
          <Fragment key={index}>
            {page?.items?.map((item) => (
              <VideoCard
                key={item.id}
                videoObjectProperty={item.snippet}
                height="full"
              />
            ))}
          </Fragment>
        ))}
        {hasNextPage && (
          <Skeleton
            ref={ref}
            {...(isLoading
              ? { isLoaded: !isLoading, minH: 'sm' }
              : { isLoaded: isLoading, minH: 0 })}
            borderRadius={8}
          />
        )}
      </SimpleGrid>
    </Fragment>
  )
}
