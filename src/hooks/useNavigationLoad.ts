import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useNavigationLoad = () => {
  const [isNavigation, setIsNavigation] = useState(false)

  const router = useRouter()

  const handleStart = () => setIsNavigation(true)

  const handleComplete = () => setIsNavigation(false)

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeError', handleComplete)
    router.events.on('routeChangeComplete', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeError', handleComplete)
      router.events.off('routeChangeComplete', handleComplete)
    }
  }, [router.asPath, router.events])

  return { isNavigation }
}
