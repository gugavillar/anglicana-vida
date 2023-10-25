import { PeopleDocument } from '@/prismic-types'
import { PrismicNextLink } from '@prismicio/next'

import { FacebookLogo, InstagramLogo } from 'phosphor-react'

import { IfComponent } from '@/components'

type SocialMediaProps = {
  socialMedia: PeopleDocument['data']['social_media'] | undefined
}

export const SocialMedia = ({ socialMedia }: SocialMediaProps) => {
  if (!socialMedia) return null

  return socialMedia?.map((media) => (
    <>
      <IfComponent
        condition={media.instagram_profile.link_type === 'Web'}
        component={
          <PrismicNextLink field={media.instagram_profile} target="_blank">
            <InstagramLogo cursor="pointer" size={40} />
          </PrismicNextLink>
        }
      />
      <IfComponent
        condition={media.facebook_profile.link_type === 'Web'}
        component={
          <PrismicNextLink field={media.facebook_profile} target="_blank">
            <FacebookLogo cursor="pointer" size={40} />
          </PrismicNextLink>
        }
      />
    </>
  ))
}
