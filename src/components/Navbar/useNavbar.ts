import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { useBreakpointValue } from '@chakra-ui/react'

export const useNavbar = () => {
  const { push } = useRouter()

  const isMobile = useBreakpointValue(
    {
      base: true,
      md: false,
      lg: false,
    },
    {
      fallback: '',
    },
  )

  const handleNavigationToHome = useCallback(() => push('/'), [push])

  return { isMobile, handleNavigationToHome }
}
