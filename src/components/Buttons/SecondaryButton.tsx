import { Button } from '@chakra-ui/react'

import { SecondaryButtonProps } from './buttons'

export const SecondaryButton = ({
  textButton,
  ...props
}: SecondaryButtonProps) => {
  return (
    <Button
      minH={16}
      px={16}
      py={6}
      borderRadius={12}
      fontSize="md"
      color="flesh.200"
      textTransform="uppercase"
      bg="cinder.950"
      _hover={{
        bg: 'cinder.950',
        opacity: 0.9,
      }}
      {...props}
    >
      {textButton}
    </Button>
  )
}
