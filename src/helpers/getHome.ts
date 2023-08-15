import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getHome = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const [home, cellCards, recurrentCards, registerCardEvents] =
      await Promise.all([
        client.getSingle('home'),
        client.getAllByType('cell_card'),
        client.getAllByType('recurrent_event_card'),
        client.getAllByType('register_card_event', {
          orderings: {
            field: 'document.last_publication_date',
            direction: 'desc',
          },
        }),
      ])
    return {
      ...home,
      context: {
        registerCardEvents,
        cellCards,
        recurrentCards,
      },
    }
  } catch (error: any) {
    throw Error(error)
  }
}
