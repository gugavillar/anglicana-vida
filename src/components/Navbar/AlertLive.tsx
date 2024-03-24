import { Alert, AlertIcon, Flex, Link } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME_THIRTY_MINUTES } from '@/constants'
import { getLiveStream } from '@/services'

export const AlertLive = () => {
  const { data } = useQuery({
    queryKey: ['liveVideo'],
    queryFn: getLiveStream,
    staleTime: QUERY_TIME_THIRTY_MINUTES,
  })

  if (!data?.items.length) return null

  console.log(data)
  return (
    <Alert px={6} status="info" bg="gray.700" textColor="white">
      <Flex maxW="75rem" mx="auto" wrap="wrap" align="center" justify="center">
        <AlertIcon color="white" />
        Assista ao vivo!&nbsp;
        <Link href="https://chakra-ui.com" isExternal textColor="red.400">
          Clique aqui para participar da transmissão.
        </Link>
      </Flex>
    </Alert>
  )
}
