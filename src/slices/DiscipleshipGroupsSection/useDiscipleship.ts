import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME_FIVE_HOURS } from '@/constants'
import { getDiscipleshipByUID } from '@/helpers'

export const useDiscipleship = (
  slice: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice'],
) => {
  const toast = useToast()
  const { data: discipleship, isError } = useQuery({
    queryKey: ['discipleship'],
    queryFn: () => getDiscipleshipByUID(slice),
    staleTime: QUERY_TIME_FIVE_HOURS,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  if (isError) {
    toast({
      status: 'error',
      description: 'Falha ao carregar os grupos de discipulados.',
    })
  }

  return { discipleship }
}
