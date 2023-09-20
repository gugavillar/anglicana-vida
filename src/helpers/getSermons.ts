import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getSermons = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const sermons = await client.getSingle('sermons')

    return {
      ...sermons,
    }
  } catch (error: any) {
    throw Error(error)
  }
}
