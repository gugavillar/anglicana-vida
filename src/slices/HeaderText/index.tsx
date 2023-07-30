import type { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'

import { PeopleCardType } from '@/components/AboutComponents/about'
import { PeopleCardGridContainer } from '@/components/AboutComponents/PeopleCardGridContainer'
import {
  EventCardType,
  RegisterCardType,
} from '@/components/EventsComponents/event'
import { EventGridContainer } from '@/components/EventsComponents/EventGridContainer'
import { EventRegisterContainer } from '@/components/EventsComponents/EventRegisterContainer'
import { IfComponent } from '@/components/IfComponent'
import { SliceContainer } from '@/components/SliceContainer'

import { roboto } from '@/fonts/roboto'

import type {
  CardEventDocument,
  PeopleCardDocument,
  RegisterCardEventDocument,
} from '../../../prismicio-types'

export type HeaderTextProps = SliceComponentProps<
  Content.HeaderTextSlice,
  {
    cardEvents: CardEventDocument<string>[]
    registerCardEvents: RegisterCardEventDocument<string>[]
    peopleCards: PeopleCardDocument<string>[]
  }
>

const headingComponent: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading
      as="h3"
      textTransform="uppercase"
      fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={700}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const subHeadingComponent: JSXMapSerializer = {
  heading6: ({ children }) => (
    <Heading
      as="h6"
      textTransform="uppercase"
      fontFamily={roboto?.style?.fontFamily}
      fontWeight={400}
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      color="cinder.950"
    >
      {children}
    </Heading>
  ),
}

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
      lineHeight="24px"
      color="cinder.950"
      textAlign="center"
      mt={8}
    >
      {children}
    </Text>
  ),
}

const components = {
  card_event: (items: Array<EventCardType>) => (
    <SliceContainer isBoxContainer>
      <EventGridContainer items={items} />
    </SliceContainer>
  ),
  register_card_event: (items: Array<RegisterCardType>) => (
    <SliceContainer isBoxContainer>
      <EventRegisterContainer items={items} />
    </SliceContainer>
  ),
  people_card: (items: Array<PeopleCardType>) => (
    <SliceContainer isBoxContainer>
      <PeopleCardGridContainer items={items} />
    </SliceContainer>
  ),
  none: () => null,
}

const HeaderText = ({ slice, context }: HeaderTextProps): JSX.Element => {
  const cardEvents = context?.cardEvents?.map((item) => ({ ...item.data }))
  const registerCardEvents = context?.registerCardEvents?.map((item) => ({
    ...item.data,
  }))
  const peopleCards = context?.peopleCards?.map((item) => ({ ...item.data }))
  return (
    <SliceContainer>
      <Box as="header" maxW="48rem" mx="auto" px={6}>
        <VStack spacing={4} textAlign="center">
          {slice?.variation !== 'withoutSubHeading' ? (
            <PrismicRichText
              components={subHeadingComponent}
              field={slice?.primary?.sub_heading}
            />
          ) : null}
          <PrismicRichText
            components={headingComponent}
            field={slice?.primary?.heading}
          />
        </VStack>
        {slice?.variation === 'withDescription' ? (
          <PrismicRichText
            components={descriptionComponent}
            field={slice?.primary?.description}
          />
        ) : null}
      </Box>
      <IfComponent
        condition={
          slice?.variation === 'withoutSubHeading' &&
          slice?.primary?.has_component &&
          !!cardEvents?.length
        }
        component={components.card_event(cardEvents)}
      />
      <IfComponent
        condition={
          slice?.variation === 'default' &&
          slice?.primary?.has_component &&
          !!registerCardEvents?.length
        }
        component={components.register_card_event(registerCardEvents)}
      />
      <IfComponent
        condition={
          slice?.variation === 'default' &&
          slice?.primary?.has_component &&
          !!peopleCards?.length
        }
        component={components.people_card(peopleCards)}
      />
    </SliceContainer>
  )
}

export default HeaderText
