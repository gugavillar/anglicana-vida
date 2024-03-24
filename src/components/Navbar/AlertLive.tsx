import { Alert, AlertIcon, Flex, Link } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME_FIVE_MINUTES } from '@/constants'
import { getLiveStream } from '@/services'

export const AlertLive = () => {
  const { data } = useQuery({
    queryKey: ['liveVideo'],
    queryFn: getLiveStream,
    staleTime: QUERY_TIME_FIVE_MINUTES,
  })

  if (!data?.items.length) return null

  return (
    <Alert px={6} status="info" bg="gray.700" textColor="white">
      <Flex maxW="75rem" mx="auto" wrap="wrap" align="center" justify="center">
        <AlertIcon color="white" />
        Assista ao vivo!&nbsp;
        <Link
          href={`https://www.youtube.com/watch?v=${data.items[0].id.videoId}`}
          isExternal
          textColor="red.400"
        >
          Clique aqui para participar da transmissão.
        </Link>
      </Flex>
    </Alert>
  )
}
