import { PrismicNextLink } from '@prismicio/next'

import { Flex, Icon } from '@chakra-ui/react'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'

import { IfComponent } from '@/components/IfComponent'

import { PeopleCardType } from '../../about'

type SocialMediaProps = {
  item: PeopleCardType
}

export const SocialMedia = ({
  item: { facebook, instagram },
}: SocialMediaProps) => {
  const iconProps = {
    width: 6,
    height: 6,
    color: 'cinder.950',
    _hover: {
      color: 'flesh.300',
      transition: 'color 0.3s',
    },
  }
  return (
    <Flex align="center" justify="center" gap={5}>
      <IfComponent
        condition={instagram?.link_type === 'Web'}
        component={
          <PrismicNextLink field={instagram}>
            <Icon as={InstagramLogo} {...iconProps} />
          </PrismicNextLink>
        }
      />
      <IfComponent
        condition={facebook?.link_type === 'Web'}
        component={
          <PrismicNextLink field={facebook}>
            <Icon as={FacebookLogo} {...iconProps} />
          </PrismicNextLink>
        }
      />
    </Flex>
  )
}
