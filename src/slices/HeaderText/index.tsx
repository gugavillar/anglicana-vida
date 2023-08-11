import type { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import { Box, Heading, VStack } from '@chakra-ui/react'

import { SliceContainer } from '@/components/SliceContainer'

import { roboto } from '@/fonts/roboto'

import { CardCell } from './components/CardCell'
import { CardEvent } from './components/CardEvent'
import { CardPeople } from './components/CardPeople'
import { CardSermon } from './components/CardSermon'
import { Description, PrimaryDescription } from './components/Description'
import { LiveSermon } from './components/LiveSermon'
import { RegisterCardEvent } from './components/RegisterCardEvent'
import { PrimarySubHeading, SubHeading } from './components/SubHeading'

import type {
  CardEventDocument,
  CellCardDocument,
  LiveSermonDocument,
  PeopleCardDocument,
  RegisterCardEventDocument,
  SermonCardDocument,
} from '../../../prismicio-types'

export type HeaderTextProps = SliceComponentProps<
  Content.HeaderTextSlice,
  {
    cardEvents: CardEventDocument<string>[]
    registerCardEvents: RegisterCardEventDocument<string>[]
    peopleCards: PeopleCardDocument<string>[]
    sermonCards: SermonCardDocument<string>[]
    liveSermon: LiveSermonDocument<string>[]
    cellCards: CellCardDocument<string>[]
  }
>

const headingComponent: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading
      as="h3"
      fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const HeaderText = ({ slice, context }: HeaderTextProps): JSX.Element => {
  return (
    <SliceContainer>
      <LiveSermon liveSermon={context?.liveSermon} />
      <Box as="header" maxW="48rem" mx="auto" px={6}>
        <VStack spacing={4} textAlign="center">
          <SubHeading
            primary={slice.primary as PrimarySubHeading}
            variation={slice?.variation}
          />
          <PrismicRichText
            components={headingComponent}
            field={slice?.primary?.heading}
          />
        </VStack>
        <Description
          variation={slice?.variation}
          primary={slice?.primary as PrimaryDescription}
        />
      </Box>
      <CardEvent
        cardEvents={context?.cardEvents}
        variation={slice?.variation}
      />
      <RegisterCardEvent
        registerCardEvents={context?.registerCardEvents}
        variation={slice?.variation}
      />
      <CardPeople
        peopleCard={context?.peopleCards}
        variation={slice?.variation}
      />
      <CardSermon
        sermonCard={context?.sermonCards}
        variation={slice?.variation}
      />
      <CardCell cellCard={context?.cellCards} variation={slice?.variation} />
    </SliceContainer>
  )
}

export default HeaderText
