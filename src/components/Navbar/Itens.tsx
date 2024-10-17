import { usePathname } from 'next/navigation'

import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { type FilledLinkToDocumentField } from '@prismicio/types'

import { Stack, type StackProps, Text } from '@chakra-ui/react'

import { NavbarProps } from './navbar'

type ItensProps = StackProps & {
  menuItens: NavbarProps['menuItens']
  onClose?: () => void
}

export const Itens = ({ menuItens, onClose, ...props }: ItensProps) => {
  const pathname = usePathname()

  if (!menuItens) return null

  return (
    <Stack {...props}>
      {menuItens?.map((item) => {
        const { id, url } = item.link as FilledLinkToDocumentField
        return (
          <PrismicNextLink field={item.link} key={id}>
            <PrismicRichText
              components={{
                paragraph: ({ children }) => (
                  <Text
                    color="white"
                    cursor="pointer"
                    {...(!!onClose && { onClick: onClose })}
                    _hover={{
                      color: 'flesh.200',
                      transition: 'color 0.3s',
                    }}
                    {...(url === pathname && { color: 'flesh.200' })}
                  >
                    {children}
                  </Text>
                ),
              }}
              field={item.label}
            />
          </PrismicNextLink>
        )
      })}
    </Stack>
  )
}
