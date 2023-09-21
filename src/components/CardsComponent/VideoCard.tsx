import dynamic from 'next/dynamic'

import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  AspectRatio,
  useBreakpointValue,
} from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'
import { formatISODate } from '@/formatters'
import { GetAllVideosFromChannelResponse } from '@/services'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

type VideoCardProps = {
  data: GetAllVideosFromChannelResponse['items'][number]['snippet']
}

export const VideoCard = ({ data }: VideoCardProps) => {
  const height = useBreakpointValue({
    base: '100%',
    md: '100%',
    lg: '100%',
  })
  const aspectRationHeight = useBreakpointValue({
    base: 170,
    md: 280,
    lg: 280,
  })

  return (
    <Card
      maxW="lg"
      minHeight={{ base: 320, md: 420, lg: 420 }}
      bg="pampas.50"
      boxShadow="md"
      mx="auto"
    >
      <CardBody p={2}>
        <AspectRatio ratio={4 / 3} height={aspectRationHeight}>
          <ReactPlayer
            width="100%"
            height={height}
            url={`http://www.youtube.com/watch?v=${data.resourceId.videoId}`}
          />
        </AspectRatio>
        <Stack spacing={4} p={5}>
          <Text fontFamily={roboto?.style?.fontFamily} opacity={0.65}>
            {formatISODate(data.publishedAt)}
          </Text>
          <Heading as="h4" size="md" fontFamily={roboto?.style?.fontFamily}>
            {data.title}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  )
}
