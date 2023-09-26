import { useEffect, useState } from 'react'

import { createClient } from '@/prismicio'
import { type Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { DiscipleshipDocument } from '../../../prismicio-types'

export const useDiscipleship = (
  slice: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice'],
) => {
  const [discipleship, setDiscipleship] = useState<
    Array<DiscipleshipDocument<string>>
  >([])

  const client = createClient()
  const toast = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await Promise.all(
          slice?.items?.map(async (item) => {
            if (!isFilled.contentRelationship(item?.discipleships)) return
            return await client.getByUID(
              'discipleship',
              item?.discipleships?.uid as string,
            )
          }),
        )
        setDiscipleship(data as Array<DiscipleshipDocument<string>>)
      } catch {
        toast({
          status: 'error',
          description: 'Falha ao carregar os grupos de discipulados.',
        })
      }
    }
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast, slice?.items])

  return { discipleship }
}
