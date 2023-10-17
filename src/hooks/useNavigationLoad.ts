import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useNavigationLoad = () => {
  const [isNavigation, setIsNavigation] = useState(false)

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsNavigation(true))

    return () =>
      router.events.on('routeChangeComplete', () => setIsNavigation(false))
  }, [router.events])

  return { isNavigation }
}
