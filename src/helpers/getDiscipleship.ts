import { createClient } from '@/prismicio'
import { type Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

export const getDiscipleshipByUID = async (
  slice: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice'],
) => {
  const client = createClient()

  const data = await Promise.all(
    slice?.items?.map(async (item) => {
      if (!isFilled.contentRelationship(item?.discipleships)) return
      return await client.getByUID(
        'discipleship',
        item?.discipleships?.uid as string,
      )
    }),
  )
  return data
}
