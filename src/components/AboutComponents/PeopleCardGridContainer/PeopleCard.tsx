import { Card, Image, VStack } from '@chakra-ui/react'

import { NameAndRole } from './common/NameAndRole'
import { SocialMedia } from './common/SocialMedia'
import { PeopleCardType } from '../about'

type PeopleCardsProps = {
  item: PeopleCardType
}

export const PeopleCard = ({ item }: PeopleCardsProps) => (
  <Card
    bg="pampas.100"
    p={6}
    borderRadius={0}
    boxShadow="none"
    height={96}
    maxWidth={80}
    justify="space-between"
  >
    <VStack spacing={8}>
      <Image
        boxSize="8rem"
        alignSelf="center"
        objectFit="fill"
        borderRadius="50%"
        src={item.image?.url as string}
        alt={item.image?.alt as string}
        border="8px solid white"
      />
      <NameAndRole item={item} />
      <SocialMedia item={item} />
    </VStack>
  </Card>
)
