import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME } from '@/constants'
import { getSubscriptionsByUID } from '@/helpers'

export const useSubscriptions = (
  slice: SliceComponentProps<Content.SubscriptionSectionSlice>['slice'],
) => {
  const toast = useToast()
  const { data: subscriptions, isError } = useQuery(
    'subscriptions',
    () => getSubscriptionsByUID(slice),
    {
      staleTime: QUERY_TIME,
    },
  )

  if (isError) {
    toast({
      status: 'error',
      description: 'Falha ao carregar os eventos.',
    })
  }

  return { subscriptions }
}
