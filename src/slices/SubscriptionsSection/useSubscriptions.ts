import { useEffect, useState } from 'react'

import { createClient } from '@/prismicio'
import { isFilled, type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { SubscriptionDocument } from '../../../prismicio-types'

export const useSubscriptions = (
  slice: SliceComponentProps<Content.SubscriptionSectionSlice>['slice'],
) => {
  const [subscriptions, setSubscriptions] = useState<
    Array<SubscriptionDocument<string>>
  >([])

  const client = createClient()
  const toast = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await Promise.all(
          slice?.items?.map(async (item) => {
            if (!isFilled.contentRelationship(item?.subscriptions)) return
            return await client.getByUID(
              'subscription',
              item?.subscriptions?.uid as string,
            )
          }),
        )
        setSubscriptions(data as Array<SubscriptionDocument<string>>)
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

  return { subscriptions }
}
