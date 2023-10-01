import { createClient } from '@/prismicio'

export const getAbout = async () => {
  const client = createClient()

  try {
    const about = await client.getSingle('about')

    return {
      ...about,
    }
  } catch (error: any) {
    throw Error(error)
  }
}
