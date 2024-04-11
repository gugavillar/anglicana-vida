import { useQuery } from 'react-query'

import { getSettings } from '@/helpers'

export const useRootProps = () => {
  const { data: navbarAndFooterProps } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    select: (data) => {
      const { footer, navbar } = data
      return {
        footer: {
          siteInfo: footer.data.site_info,
          socialMedia: footer.data.social_media,
          recommendation: footer.data.recommendation,
        },
        navbar: {
          menuItens: navbar.data.menu_itens,
        },
      }
    },
  })

  return { navbarAndFooterProps }
}
