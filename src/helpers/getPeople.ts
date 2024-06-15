import { createClient } from '@/prismicio'
import { type Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

export const getPeopleByUID = async (
  slice: SliceComponentProps<Content.PastoralTeamSlice>['slice'],
) => {
  const client = createClient()

  try {
    const data = await Promise.all(
      slice?.items?.map(async (item) => {
        if (!isFilled.contentRelationship(item?.team)) return
        return await client.getByUID('people', item?.team?.uid as string)
      }),
    )
    return data
  } catch (error: any) {
    throw Error(error)
  }
}
