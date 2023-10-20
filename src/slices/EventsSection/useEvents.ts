import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { getEventsByUID } from '@/helpers'

export const useEvents = (
  slice: SliceComponentProps<Content.EventsSectionSlice>['slice'],
) => {
  const toast = useToast()
  const { data: events, isError } = useQuery(
    'events',
    () => getEventsByUID(slice),
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

  return { events }
}
