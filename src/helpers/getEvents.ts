import { createClient } from '@/prismicio'
import { isFilled, type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

export const getEvents = async () => {
  const client = createClient()

  try {
    const events = await client.getSingle('events')

    return {
      ...events,
    }
  } catch (error: any) {
    throw Error(error)
  }
}

export const getEventsByUID = async (
  slice: SliceComponentProps<Content.EventsSectionSlice>['slice'],
) => {
  const client = createClient()

  const data = await Promise.all(
    slice?.items?.map(async (item) => {
      if (!isFilled.contentRelationship(item?.events)) return
      return await client.getByUID('event', item?.events?.uid as string)
    }),
  )
  return data
}
