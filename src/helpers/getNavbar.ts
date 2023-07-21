import { GetStaticPropsContext } from 'next'

import { createClient } from '@/prismicio'

export const getNavbar = async ({ previewData }: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  try {
    const navbar = await client.getSingle('navbar')
    return { ...navbar }
  } catch (error: any) {
    throw Error(error)
  }
}
