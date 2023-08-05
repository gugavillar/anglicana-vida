import { useRouter } from 'next/router'

import { Button } from '@chakra-ui/react'
import { ArrowRight } from 'phosphor-react'

import { roboto } from '@/fonts/roboto'

import { IfComponent } from '../IfComponent'

type NavigationButtonProps = {
  pathRouter: string
  textButton: string
  pathsToShow: Array<string>
}

export const NavigationButton = ({
  pathRouter,
  textButton,
  pathsToShow,
}: NavigationButtonProps) => {
  const { push, asPath } = useRouter()

  const isShowLinkButton = pathsToShow.includes(asPath)

  return (
    <IfComponent
      condition={isShowLinkButton}
      component={
        <Button
          alignSelf="end"
          variant="ghost"
          rightIcon={<ArrowRight />}
          maxWidth="13.75rem"
          fontSize="md"
          fontFamily={roboto.style.fontFamily}
          fontWeight={400}
          lineHeight="2rem"
          _hover={{
            bg: 'flesh.200',
            opacity: 0.8,
          }}
          onClick={() => push(pathRouter)}
        >
          {textButton}
        </Button>
      }
    />
  )
}
