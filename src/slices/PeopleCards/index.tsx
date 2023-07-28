import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Card, SimpleGrid, Image } from '@chakra-ui/react'

import { SliceContainer } from '@/components/SliceContainer'

import { NameAndRole } from './NameAndRole'
import { SocialMedia } from './SocialMedia'

export type PeopleCardsProps = SliceComponentProps<Content.PeopleCardsSlice>

const PeopleCards = ({ slice }: PeopleCardsProps): JSX.Element => {
  return (
    <SliceContainer>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        minWidth="18.75rem"
        rowGap={6}
        columnGap={6}
        px={4}
      >
        {slice.items.map((item, index) => (
          <Card
            key={index}
            bg="pampas.100"
            p={{
              base: '1.5rem 2.25rem',
              md: '2.25rem 3rem',
              lg: '3rem 4.6875rem',
            }}
            borderRadius={0}
            boxShadow="none"
            maxH="22.875rem"
          >
            <Image
              objectFit="fill"
              borderRadius="50%"
              src={item.image?.url as string}
              alt={item.image?.alt as string}
              border="8px solid white"
            />
            <NameAndRole item={item} />
            <SocialMedia item={item} />
          </Card>
        ))}
      </SimpleGrid>
    </SliceContainer>
  )
}

export default PeopleCards
