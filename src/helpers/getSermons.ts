import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getSermons = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const [sermons, sermonCards, liveSermon] = await Promise.all([
      client.getSingle('sermons'),
      client.getAllByType('sermon_card'),
      client.getAllByType('live_sermon', {
        orderings: {
          field: 'document.last_publication_date',
          direction: 'desc',
        },
      }),
    ])
    return {
      ...sermons,
      context: {
        sermonCards,
        liveSermon,
      },
    }
  } catch (error: any) {
    throw Error(error)
  }
}
