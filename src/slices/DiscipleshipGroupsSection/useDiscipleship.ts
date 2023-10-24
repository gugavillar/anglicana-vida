import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME } from '@/constants'
import { getDiscipleshipByUID } from '@/helpers'

export const useDiscipleship = (
  slice: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice'],
) => {
  const toast = useToast()
  const { data: discipleship, isError } = useQuery(
    'discipleship',
    () => getDiscipleshipByUID(slice),
    {
      staleTime: QUERY_TIME,
    },
  )

  if (isError) {
    toast({
      status: 'error',
      description: 'Falha ao carregar os grupos de discipulados.',
    })
  }

  return { discipleship }
}
