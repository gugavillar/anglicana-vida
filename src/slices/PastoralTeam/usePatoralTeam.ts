import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME_FIVE_HOURS } from '@/constants'
import { getPeopleByUID } from '@/helpers'

export const usePastoralTeam = (
  slice: SliceComponentProps<Content.PastoralTeamSlice>['slice'],
) => {
  const toast = useToast()
  const { data: people, isError } = useQuery({
    queryKey: ['people'],
    queryFn: () => getPeopleByUID(slice),
    staleTime: QUERY_TIME_FIVE_HOURS,
  })

  if (isError) {
    toast({
      status: 'error',
      description: 'Falha ao carregar a equipe pastoral.',
    })
  }

  return { people }
}
