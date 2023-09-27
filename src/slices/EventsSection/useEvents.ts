import { useEffect, useState } from 'react'

import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { getEventsByUID } from '@/helpers'

export const useEvents = (
  slice: SliceComponentProps<Content.EventsSectionSlice>['slice'],
) => {
  const [events, setEvents] = useState<
    (Content.EventDocument<string> | undefined)[]
  >([])

  const toast = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getEventsByUID(slice)
        setEvents(data)
      } catch {
        toast({
          status: 'error',
          description: 'Falha ao carregar os eventos.',
        })
      }
    }
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast, slice?.items])

  return { events }
}
