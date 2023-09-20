import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getHome = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const home = await client.getSingle('home')

    return {
      ...home,
    }
  } catch (error: any) {
    throw Error(error)
  }
}
