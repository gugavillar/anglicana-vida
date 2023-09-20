import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getEvents = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const events = await client.getSingle('events')

    return {
      ...events,
    }
  } catch (error: any) {
    throw Error(error)
  }
}
