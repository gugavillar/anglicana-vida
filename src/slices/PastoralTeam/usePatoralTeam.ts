import type { Content } from '@prismicio/client'
import { type SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { getPeopleByUID } from '@/helpers'

export const usePastoralTeam = (
  slice: SliceComponentProps<Content.PastoralTeamSlice>['slice'],
) => {
  const toast = useToast()
  const { data: people } = useQuery({
    queryKey: ['people'],
    queryFn: () => getPeopleByUID(slice),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    onError: () => {
      toast({
        status: 'error',
        description: 'Falha ao carregar a equipe pastoral.',
      })
    },
  })

  return { people }
}
