import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getEvents = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const [events, cardEvents, registerCardEvents] = await Promise.all([
      client.getSingle('events'),
      client.getAllByType('card_event'),
      client.getAllByType('register_card_event'),
    ])
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
