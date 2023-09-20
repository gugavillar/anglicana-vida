import { createClient } from '@/prismicio'

export const getEvents = async () => {
  const client = createClient()

  try {
    const events = await client.getSingle('events')

    return {
      ...events,
    }
  } catch (error: any) {
    throw Error(error)
  }
}
