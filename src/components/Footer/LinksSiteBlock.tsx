import type {
  FooterDocumentDataRecommendationItem,
  Simplify,
} from '@/prismic-types'
import { PrismicNextLink } from '@prismicio/next'
import { KeyTextField } from '@prismicio/types'

import { VStack, Button } from '@chakra-ui/react'

import { ArrowSquareOut } from 'phosphor-react'

type LinksSiteBlockProps = {
  recommendation:
    | Array<Simplify<FooterDocumentDataRecommendationItem>>
    | undefined
}

type LabelLinkProps = {
  label: KeyTextField
}

const LabelLink = ({ label }: LabelLinkProps) => {
  return (
    <Button
      variant="ghost"
      rightIcon={<ArrowSquareOut />}
      fontSize="md"
      color="white"
      fontWeight={400}
      _hover={{
        color: 'flesh.200',
        transition: 'color 0.3s',
      }}
    >
      {label}
    </Button>
  )
}

export const LinksSiteBlock = ({ recommendation }: LinksSiteBlockProps) => {
  if (!recommendation?.length) return null

  return (
    <VStack align="flex-start" spacing={4}>
      {recommendation?.map(({ external_link: externalLink, label }, index) => (
        <PrismicNextLink
          key={index}
          field={externalLink}
          target="_blank"
          passHref
        >
          <LabelLink label={label} />
        </PrismicNextLink>
      ))}
    </VStack>
  )
}
