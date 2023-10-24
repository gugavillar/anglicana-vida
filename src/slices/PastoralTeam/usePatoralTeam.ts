import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { getPeopleByUID } from '@/helpers'

export const usePastoralTeam = (
  slice: SliceComponentProps<Content.PastoralTeamSlice>['slice'],
) => {
  const toast = useToast()
  const { data: people, isError } = useQuery(
    'people',
    () => getPeopleByUID(slice),
    {
      staleTime: 60 * 5 * 60 * 1000,
    },
  )
  if (isError) {
    toast({
      status: 'error',
      description: 'Falha ao carregar a equipe pastoral.',
    })
  }

  return { people }
}
