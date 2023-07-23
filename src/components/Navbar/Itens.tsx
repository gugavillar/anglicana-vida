import { Fragment } from 'react'

import { PrismicNextLink } from '@prismicio/next'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Stack, StackProps, Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { NavbarProps } from './navbar'

type ItensProps = StackProps & {
  menuItens: NavbarProps['menuItens']
}

const label: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      className={roboto?.style?.fontFamily}
      color="white"
      textTransform="uppercase"
      cursor="pointer"
    >
      {children}
    </Text>
  ),
}

export const Itens = ({ menuItens, ...props }: ItensProps) => {
  return (
    <Stack {...props}>
      {menuItens.map((item, index) => (
        <Fragment key={index}>
          <PrismicNextLink field={item.link}>
            <PrismicRichText components={label} field={item.label} />
          </PrismicNextLink>
        </Fragment>
      ))}
    </Stack>
  )
}
