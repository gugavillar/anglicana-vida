import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { getSubscriptionsByUID } from '@/helpers'

export const useSubscriptions = (
  slice: SliceComponentProps<Content.SubscriptionSectionSlice>['slice'],
) => {
  const toast = useToast()
  const { data: subscriptions, isError } = useQuery(
    'subscriptions',
    () => getSubscriptionsByUID(slice),
    {
      staleTime: 60 * 5 * 60 * 1000,
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
