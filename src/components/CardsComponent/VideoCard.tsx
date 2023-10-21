import {
  Card,
  CardBody,
  Stack,
  Text,
  CardProps,
  Image,
  Link,
  CardFooter,
} from '@chakra-ui/react'

import { Play } from 'phosphor-react'

import { H4 } from '@/components'

import { formatISODate } from '@/formatters'
import { GetAllVideosFromChannelResponse } from '@/services'

type VideoCardProps = CardProps & {
  videoObjectProperty: GetAllVideosFromChannelResponse['items'][number]['snippet']
}

export const VideoCard = ({
  videoObjectProperty,
  ...props
}: VideoCardProps) => {
  return (
    <Card
      maxW="lg"
      flex={1}
      bg="pampas.50"
      boxShadow="md"
      mx="auto"
      width="full"
      {...props}
    >
      <CardBody p={2}>
        <Image
          src={videoObjectProperty.thumbnails.high.url}
          alt={videoObjectProperty.title}
          minHeight="16.25rem"
        />
        <Stack spacing={4} p="8px 5px 0 5px">
          <Text opacity={0.65}>
            {formatISODate(videoObjectProperty.publishedAt)}
          </Text>
          <H4
            as="h4"
            size="md"
            textTransform="lowercase"
            maxHeight="4rem"
            minHeight="4rem"
            _firstLetter={{ textTransform: 'uppercase' }}
          >
            {videoObjectProperty.title}
          </H4>
        </Stack>
      </CardBody>
      <CardFooter p="0 5px 10px 5px" justifyContent="center">
        <Link
          href={`https://www.youtube.com/watch?v=${videoObjectProperty.resourceId.videoId}`}
          target="_blank"
          display="flex"
        >
          <Text>Play</Text>
          <Play size={25} />
        </Link>
      </CardFooter>
    </Card>
  )
}
