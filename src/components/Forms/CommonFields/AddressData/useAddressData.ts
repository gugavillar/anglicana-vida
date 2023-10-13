import { useEffect, useState } from 'react'

import { useToast } from '@chakra-ui/react'

import axios from 'axios'

import { getCitiesByStateToSelectField } from '@/services'
import { SelectOption } from '@/types/common'

export const useAddressData = (state: string) => {
  const [cities, setCities] = useState<SelectOption>([])
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const getCities = async (state: string) => {
      setIsLoading(true)
      try {
        const response = await getCitiesByStateToSelectField(state, { signal })
        setCities(response)
        setIsLoading(false)
      } catch (error: any) {
        if (!axios.isAxiosError(error)) {
          toast({
            status: 'error',
            description:
              'Falha ao carregar as cidades, selecione o estado novamente.',
          })
          setIsLoading(false)
        }
      }
    }

    state && getCities(state)

    return () => controller.abort()
  }, [state, toast])

  return { cities, isLoading }
}
