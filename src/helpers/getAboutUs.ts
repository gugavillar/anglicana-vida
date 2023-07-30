import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getAboutUs = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const aboutUs = await client.getSingle('about_us')
    const peopleCards = await client.getAllByType('people_card')
    return {
      ...aboutUs,
      context: {
        peopleCards,
      },
    }
  } catch (error: any) {
    throw Error(error)
  }
}
