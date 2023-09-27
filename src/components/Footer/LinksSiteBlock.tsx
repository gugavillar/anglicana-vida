import { PrismicNextLink } from '@prismicio/next'
import { KeyTextField } from '@prismicio/types'

import { VStack, Button } from '@chakra-ui/react'
import { ArrowSquareOut } from 'phosphor-react'

import { roboto } from '@/fonts/roboto'

import type {
  FooterDocumentDataRecommendationItem,
  Simplify,
} from '../../../prismicio-types'

type LinksSiteBlockProps = {
  recommendation: Array<Simplify<FooterDocumentDataRecommendationItem>>
}

type LabelLinkProps = {
  label: KeyTextField
}

const LabelLink = ({ label }: LabelLinkProps) => {
  return (
    <Button
      variant="ghost"
      rightIcon={<ArrowSquareOut />}
      fontFamily={roboto?.style?.fontFamily}
      fontSize="md"
      color="white"
      fontWeight={400}
      height={0}
      p={0}
      _hover={{
        bg: 'transparent',
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
      {recommendation.map(({ external_link: externalLink, label }, index) => (
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
