import type { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

import { Flex } from '@chakra-ui/react'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'

import type { Simplify } from '../../../prismicio-types'

type SocialMediaProps = {
  item: Simplify<Content.PeopleCardsSlice>['items'][number]
}

export const SocialMedia = ({
  item: { facebook, instagram },
}: SocialMediaProps) => {
  return (
    <Flex align="center" justify="center" gap={5} mt={4}>
      <PrismicNextLink field={instagram}>
        <InstagramLogo width={24} height={24} color="black" />
      </PrismicNextLink>
      <PrismicNextLink field={facebook}>
        <FacebookLogo width={24} height={24} color="black" />
      </PrismicNextLink>
    </Flex>
  )
}
