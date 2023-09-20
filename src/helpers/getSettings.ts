import { createClient } from '@/prismicio'

export const getSettings = async () => {
  const client = createClient()

  try {
    const [navbar, footer] = await Promise.all([
      client.getSingle('navbar'),
      client.getSingle('footer'),
    ])
    return { footer, navbar }
  } catch (error: any) {
    throw Error(error)
  }
}
