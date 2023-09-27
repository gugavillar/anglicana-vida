import { Fragment } from 'react'

import { Button, Flex, SimpleGrid, Skeleton } from '@chakra-ui/react'

import { VideoCard } from '@/components'

import { GetAllVideosFromChannelResponse } from '@/services'

import { useSermonsContent } from './useSermonsContent'

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
    cursor: 'not-allowed',
  },
}

export const SermonsContents = ({ context }: SermonsContentsProps) => {
  const { handleLoadNextSermons, handleLoadPrevSermons, isLoading, sermons } =
    useSermonsContent(context)

  return (
    <Fragment>
      <SimpleGrid
        minChildWidth={{ base: 'full', md: '20rem', lg: 'xs' }}
        height={{ base: '135rem', md: '90rem', lg: '58rem' }}
        width="full"
        spacing={8}
      >
        {sermons.items.map((item) => (
          <Skeleton
            key={item.id}
            isLoaded={!isLoading}
            minWidth={{ base: 'full', md: '20rem', lg: 'xs' }}
            width={{ base: 'full', md: '20rem', lg: 'xs' }}
            borderRadius={8}
            mx="auto"
          >
            <VideoCard
              minHeight={{ base: 'xs', md: 'md', lg: 'md' }}
              data={item.snippet}
            />
          </Skeleton>
        ))}
      </SimpleGrid>
      <Flex
        align="center"
        justify="space-between"
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
