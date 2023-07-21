import { Fragment } from 'react'

import { PrismicNextLink } from '@prismicio/next'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Text } from '@chakra-ui/react'

import { roboto } from '@/fonts/roboto'

import { NavbarProps } from './navbar'

type ItensProps = {
  menuItens: NavbarProps['menuItens']
}

const label: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      className={roboto?.style?.fontFamily}
      color="whiteAlpha.700"
      fontSize={16}
      textTransform="capitalize"
      p={2}
      cursor="pointer"
    >
      {children}
    </Text>
  ),
}

export const Itens = ({ menuItens }: ItensProps) => {
  return menuItens.map((item, index) => (
    <Fragment key={index}>
      <PrismicNextLink field={item.link}>
        <PrismicRichText components={label} field={item.label} />
      </PrismicNextLink>
    </Fragment>
  ))
}
