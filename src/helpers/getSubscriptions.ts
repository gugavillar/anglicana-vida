import { createClient } from '@/prismicio'
import { type Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { compareDesc } from 'date-fns'

import { isFutureDate } from '@/formatters'

export const getSubscriptionsByUID = async (
  slice: SliceComponentProps<Content.SubscriptionSectionSlice>['slice'],
) => {
  const client = createClient()

  const data = await Promise.all(
    slice?.items?.map(async (item) => {
      if (!isFilled.contentRelationship(item?.subscriptions)) return
      return await client.getByUID(
        item.subscriptions.type,
        item?.subscriptions?.uid as string,
      )
    }),
  )

  const futureSubscriptions = data
    ?.filter(
      (subscription) =>
        isFutureDate(subscription?.data.event_final_date as string) &&
        subscription,
    )
    .sort((a, b) =>
      compareDesc(
        a?.data.event_final_date as string,
        b?.data.event_final_date as string,
      ),
    )

  return futureSubscriptions
}
