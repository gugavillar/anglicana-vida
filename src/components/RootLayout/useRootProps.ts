import { useMemo } from 'react'

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
        whatsapp: {
          number: navbar.data.whatsapp_number,
          message: navbar.data.whatsapp_message,
        },
      }
    },
  })

  const { recommendation, siteInfo, socialMedia, menuItens, whatsapp } =
    useMemo(
      () => ({
        socialMedia: navbarAndFooterProps?.footer?.socialMedia,
        recommendation: navbarAndFooterProps?.footer?.recommendation,
        siteInfo: navbarAndFooterProps?.footer?.siteInfo,
        menuItens: navbarAndFooterProps?.navbar?.menuItens,
        whatsapp: navbarAndFooterProps?.whatsapp,
      }),
      [
        navbarAndFooterProps?.footer?.socialMedia,
        navbarAndFooterProps?.footer?.recommendation,
        navbarAndFooterProps?.footer?.siteInfo,
        navbarAndFooterProps?.navbar?.menuItens,
        navbarAndFooterProps?.whatsapp,
      ],
    )

  return { menuItens, recommendation, siteInfo, socialMedia, whatsapp }
}
