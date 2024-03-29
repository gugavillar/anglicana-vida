import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME_TWO_HOURS } from '@/constants'
import { getEventsByUID } from '@/helpers'

export const useEvents = (
  slice: SliceComponentProps<Content.EventsSectionSlice>['slice'],
) => {
  const toast = useToast()
  const { data: events, isError } = useQuery({
    queryKey: ['events'],
    queryFn: () => getEventsByUID(slice),
    staleTime: QUERY_TIME_TWO_HOURS,
  })

  if (isError) {
    toast({
      status: 'error',
      description: 'Falha ao carregar os eventos.',
    })
  }

  return { events }
}
