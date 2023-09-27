import { useEffect, useState } from 'react'

import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { getSubscriptionsByUID } from '@/helpers'

export const useSubscriptions = (
  slice: SliceComponentProps<Content.SubscriptionSectionSlice>['slice'],
) => {
  const [subscriptions, setSubscriptions] = useState<
    (Content.SubscriptionDocument<string> | undefined)[]
  >([])

  const toast = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getSubscriptionsByUID(slice)
        setSubscriptions(data)
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
