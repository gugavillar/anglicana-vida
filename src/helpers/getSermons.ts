import { createClient } from '@/prismicio'

export const getSermons = async () => {
  const client = createClient()

  try {
    const sermons = await client.getSingle('sermons')

    return {
      ...sermons,
    }
  } catch (error: any) {
    throw Error(error)
  }
}
