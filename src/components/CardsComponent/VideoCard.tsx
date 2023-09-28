import dynamic from 'next/dynamic'

import {
  Card,
  CardBody,
  Stack,
  Text,
  AspectRatio,
  useBreakpointValue,
  Image,
  CardProps,
} from '@chakra-ui/react'

import { H4 } from '@/components'

import { formatISODate } from '@/formatters'
import { GetAllVideosFromChannelResponse } from '@/services'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type VideoCardProps = CardProps & {
  videoObjectProperty: GetAllVideosFromChannelResponse['items'][number]['snippet']
}

export const VideoCard = ({
  videoObjectProperty,
  ...props
}: VideoCardProps) => {
  const aspectRationHeight = useBreakpointValue(
    {
      base: 170,
      md: 280,
      lg: 280,
    },
    {
      fallback: '',
    },
  )

  if (!aspectRationHeight) return null

  return (
    <Card
      maxW="lg"
      minHeight={{ base: 'xs', md: 'md', lg: 'md' }}
      bg="pampas.50"
      boxShadow="md"
      mx="auto"
      {...props}
    >
      <CardBody p={2}>
        <AspectRatio ratio={4 / 3} height={aspectRationHeight}>
          <ReactPlayer
            light={
              <Image
                src={videoObjectProperty.thumbnails.high.url}
                alt={videoObjectProperty.title}
              />
            }
            width="100%"
            height="100%"
            config={{
              youtube: { playerVars: { origin: window.location.origin } },
            }}
            url={`http://www.youtube.com/embed/${videoObjectProperty.resourceId.videoId}`}
          />
        </AspectRatio>
        <Stack spacing={4} p={5}>
          <Text opacity={0.65}>
            {formatISODate(videoObjectProperty.publishedAt)}
          </Text>
          <H4
            as="h4"
            size="md"
            textTransform="lowercase"
            _firstLetter={{ textTransform: 'uppercase' }}
          >
            {videoObjectProperty.title}
          </H4>
        </Stack>
      </CardBody>
    </Card>
  )
}
