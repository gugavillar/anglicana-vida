import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getSermons = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const sermons = await client.getSingle('sermons')
    const sermonCards = await client.getAllByType('sermon_card')
    return {
      ...sermons,
      context: {
        sermonCards,
      },
    }
  } catch (error: any) {
    throw Error(error)
  }
}
