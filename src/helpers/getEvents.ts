import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getEvents = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const events = await client.getSingle('events')
    const cardEvents = await client.getAllByType('card_event')
    const registerCardEvents = await client.getAllByType('register_card_event')
    return {
      ...events,
      context: {
        cardEvents,
        registerCardEvents,
      },
    }
  } catch (error: any) {
    throw Error(error)
  }
}
