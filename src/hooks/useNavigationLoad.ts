import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export const useNavigationLoad = () => {
  const [isNavigation, setIsNavigation] = useState(false)

  const router = useRouter()

  const handleStart = useCallback(
    (url: string) => url !== router.asPath && setIsNavigation(true),
    [router.asPath],
  )
  const handleComplete = useCallback(
    (url: string) => url === router.asPath && setIsNavigation(false),
    [router.asPath],
  )

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeError', handleComplete)
    router.events.on('routeChangeComplete', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeError', handleComplete)
      router.events.off('routeChangeComplete', handleComplete)
    }
  }, [handleComplete, handleStart, router.events])

  return { isNavigation }
}
