import { createClient } from '@/prismicio'
import { type Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

export const getSubscriptionsByUID = async (
  slice: SliceComponentProps<Content.SubscriptionSectionSlice>['slice'],
) => {
  const client = createClient()

  const data = await Promise.all(
    slice?.items?.map(async (item) => {
      if (!isFilled.contentRelationship(item?.subscriptions)) return
      return await client.getByUID(
        'subscription',
        item?.subscriptions?.uid as string,
      )
    }),
  )
  return data
}
