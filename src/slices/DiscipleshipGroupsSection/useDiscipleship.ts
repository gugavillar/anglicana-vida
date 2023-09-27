import { useEffect, useState } from 'react'

import { type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { useToast } from '@chakra-ui/react'

import { getDiscipleshipByUID } from '@/helpers'

export const useDiscipleship = (
  slice: SliceComponentProps<Content.DiscipleshipGroupsSlice>['slice'],
) => {
  const [discipleship, setDiscipleship] = useState<
    (Content.DiscipleshipDocument<string> | undefined)[]
  >([])

  const toast = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getDiscipleshipByUID(slice)
        setDiscipleship(data)
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
