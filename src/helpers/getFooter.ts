import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getFooter = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const footer = await client.getSingle('footer')
    return { ...footer }
  } catch (error: any) {
    throw Error(error)
  }
}
