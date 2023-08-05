import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getSermons = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const sermons = await client.getSingle('sermons')
    const sermonCards = await client.getAllByType('sermon_card')
    const liveSermon = await client.getAllByType('live_sermon', {
      orderings: {
        field: 'document.last_publication_date',
        direction: 'desc',
      },
    })
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
