import { useRouter } from 'next/router'

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

  const handleNavigationToHome = () => push('/')

  return { isMobile, handleNavigationToHome }
}
