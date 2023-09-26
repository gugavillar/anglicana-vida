import dynamic from 'next/dynamic'

import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  AspectRatio,
  useBreakpointValue,
  Image,
  CardProps,
} from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'
import { formatISODate } from '@/formatters'
import { GetAllVideosFromChannelResponse } from '@/services'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type VideoCardProps = CardProps & {
  data: GetAllVideosFromChannelResponse['items'][number]['snippet']
}

export const VideoCard = ({ data, ...props }: VideoCardProps) => {
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
            light={<Image src={data.thumbnails.high.url} alt={data.title} />}
            width="100%"
            height="100%"
            config={{
              youtube: { playerVars: { origin: window.location.origin } },
            }}
            url={`http://www.youtube.com/embed/${data.resourceId.videoId}`}
          />
        </AspectRatio>
        <Stack spacing={4} p={5}>
          <Text fontFamily={roboto?.style?.fontFamily} opacity={0.65}>
            {formatISODate(data.publishedAt)}
          </Text>
          <Heading
            as="h4"
            size="md"
            textTransform="lowercase"
            fontFamily={roboto?.style?.fontFamily}
            _firstLetter={{ textTransform: 'uppercase' }}
          >
            {data.title}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  )
}
