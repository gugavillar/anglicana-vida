import { PrismicNextLink } from '@prismicio/next'

import { Flex } from '@chakra-ui/react'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'

import { PeopleCardType } from '../../about'

type SocialMediaProps = {
  item: PeopleCardType
}

export const SocialMedia = ({
  item: { facebook, instagram },
}: SocialMediaProps) => {
  return (
    <Flex align="center" justify="center" gap={5}>
      <PrismicNextLink field={instagram}>
        <InstagramLogo width={24} height={24} color="black" />
      </PrismicNextLink>
      <PrismicNextLink field={facebook}>
        <FacebookLogo width={24} height={24} color="black" />
      </PrismicNextLink>
    </Flex>
  )
}
