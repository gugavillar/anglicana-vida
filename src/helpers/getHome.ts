import { createClient } from '@/prismicio'

export const getHome = async () => {
  const client = createClient()

  try {
    const home = await client.getSingle('home')

    return {
      ...home,
    }
  } catch (error: any) {
    throw Error(error)
  }
}
