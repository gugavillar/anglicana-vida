import { memo } from 'react'

import {
  Card,
  CardBody,
  VStack,
  Text,
  CardProps,
  Img,
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

export const VideoCard = memo(
  ({ videoObjectProperty, ...props }: VideoCardProps) => {
    return (
      <Card
        maxW="lg"
        flex={1}
        bg="transparent"
        boxShadow="none"
        mx="auto"
        width="full"
        {...props}
      >
        <CardBody p={2}>
          <Img
            src={videoObjectProperty.thumbnails.high.url}
            alt={videoObjectProperty.title}
            minHeight="16.25rem"
            mx="auto"
            aspectRatio={4 / 3}
          />
          <VStack spacing={4} p="16px 5px 0 5px">
            <Text opacity={0.65}>
              {formatISODate(videoObjectProperty.publishedAt)}
            </Text>
            <H4
              as="h4"
              size="md"
              textTransform="lowercase"
              minHeight="4rem"
              textAlign="center"
              _firstLetter={{ textTransform: 'uppercase' }}
            >
              {videoObjectProperty.title}
            </H4>
          </VStack>
        </CardBody>
        <CardFooter p="0 5px 10px 5px" justifyContent="center">
          <Link
            href={`https://www.youtube.com/watch?v=${videoObjectProperty.resourceId.videoId}`}
            target="_blank"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#3b4d69"
            color="white"
            fontWeight={600}
            width="40%"
            py={2}
            borderRadius={8}
            gap={2}
          >
            <Play size={20} />
            <Text>Assistir</Text>
          </Link>
        </CardFooter>
      </Card>
    )
  },
)

VideoCard.displayName = 'VideoCard'
