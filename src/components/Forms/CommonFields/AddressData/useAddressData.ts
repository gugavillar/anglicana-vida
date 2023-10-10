import { useEffect, useState } from 'react'

import { useToast } from '@chakra-ui/react'

import axios from 'axios'

import { getCitiesByStateToSelectField } from '@/services'

export const useAddressData = (state: string) => {
  const [cities, setCities] = useState<Array<{ label: string; value: string }>>(
    [],
  )

  const toast = useToast()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const getCities = async (state: string) => {
      try {
        const response = await getCitiesByStateToSelectField(state, { signal })
        setCities(response)
      } catch (error: any) {
        if (!axios.isAxiosError(error)) {
          toast({
            status: 'error',
            description:
              'Falha ao carregar as cidades, selecione o estado novamente.',
          })
        }
      }
    }

    state && getCities(state)

    return () => controller.abort()
  }, [state, toast])

  return { cities }
}
