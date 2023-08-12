import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getHome = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const home = await client.getSingle('home')
    const cellCards = await client.getAllByType('cell_card')
    const recurrentCards = await client.getAllByType('recurrent_event_card')
    const registerCardEvents = await client.getAllByType(
      'register_card_event',
      {
        orderings: {
          field: 'document.last_publication_date',
          direction: 'desc',
        },
      },
    )
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
