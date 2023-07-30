import { Card, Image } from '@chakra-ui/react'

import { NameAndRole } from './common/NameAndRole'
import { SocialMedia } from './common/SocialMedia'
import { PeopleCardType } from '../about'

type PeopleCardsProps = {
  items: Array<PeopleCardType>
}

export const PeopleCard = ({ items }: PeopleCardsProps) => {
  return items.map((item, index) => (
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
  ))
}
