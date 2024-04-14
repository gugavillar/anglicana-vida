import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import { Stack, StackProps, Text } from '@chakra-ui/react'

import { NavbarProps } from './navbar'

type ItensProps = StackProps & {
  menuItens: NavbarProps['menuItens']
  onClose?: () => void
}

export const Itens = ({ menuItens, onClose, ...props }: ItensProps) => {
  return (
    <Stack {...props}>
      {menuItens?.map((item, index) => (
        <PrismicNextLink field={item.link} key={index}>
          <PrismicRichText
            components={{
              paragraph: ({ children }) => (
                <Text
                  color="white"
                  cursor="pointer"
                  {...(!!onClose && { onClick: onClose })}
                  _hover={{
                    color: 'flesh.200',
                  }}
                >
                  {children}
                </Text>
              ),
            }}
            field={item.label}
          />
        </PrismicNextLink>
      ))}
    </Stack>
  )
}
