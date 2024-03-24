import { useToast } from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { QUERY_TIME_TWO_HOURS } from '@/constants'
import { getCitiesByStateToSelectField } from '@/services'

export const useAddressData = (state: string) => {
  const {
    data: cities,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['cities', state],
    queryFn: ({ signal }) => getCitiesByStateToSelectField(state, { signal }),
    staleTime: QUERY_TIME_TWO_HOURS,
  })

  const toast = useToast()

  if (isError) {
    toast({
      status: 'error',
      description:
        'Falha ao carregar as cidades, selecione o estado novamente.',
    })
  }

  return { cities, isLoading }
}
