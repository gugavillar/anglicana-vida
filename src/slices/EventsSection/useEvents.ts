import { useEffect, useState } from 'react'

import { createClient } from '@/prismicio'
import { type Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { EventDocument } from '../../../prismicio-types'

export const useEvents = (
  slice: SliceComponentProps<Content.EventsSectionSlice>['slice'],
) => {
  const [events, setEvents] = useState<Array<EventDocument<string>>>([])

  const client = createClient()
  const toast = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await Promise.all(
          slice?.items?.map(async (item) => {
            if (!isFilled.contentRelationship(item?.events)) return
            return await client.getByUID('event', item?.events?.uid as string)
          }),
        )
        setEvents(data as Array<EventDocument<string>>)
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
