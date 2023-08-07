import { Fragment } from 'react'

import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import { Stack, StackProps, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { NavbarProps } from './navbar'

type ItensProps = StackProps & {
  menuItens: NavbarProps['menuItens']
  onClose?: () => void
}

export const Itens = ({ menuItens, onClose, ...props }: ItensProps) => {
  return (
    <Stack {...props}>
      {menuItens.map((item, index) => (
        <Fragment key={index}>
          <PrismicNextLink field={item.link}>
            <PrismicRichText
              components={{
                paragraph: ({ children }) => (
                  <Text
                    className={roboto?.style?.fontFamily}
                    color="white"
                    textTransform="uppercase"
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
        </Fragment>
      ))}
    </Stack>
  )
}
