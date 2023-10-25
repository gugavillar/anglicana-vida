import { Button, Flex } from '@chakra-ui/react'

type ActionButtonsProps = {
  prevPageToken: string | undefined
  nextPageToken: string | undefined
  handleLoadPrevSermons: () => void
  handleLoadNextSermons: () => void
}

export const ActionButtons = ({
  handleLoadNextSermons,
  handleLoadPrevSermons,
  nextPageToken,
  prevPageToken,
}: ActionButtonsProps) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      width="full"
      mt={28}
      mx="auto"
      gap={6}
      flexDir={{ base: 'column', md: 'row', lg: 'row' }}
    >
      <Button
        width={{ base: 'full', md: 32, lg: 32 }}
        isDisabled={!prevPageToken}
        onClick={handleLoadPrevSermons}
      >
        Anterior
      </Button>
      <Button
        width={{ base: 'full', md: 32, lg: 32 }}
        isDisabled={!nextPageToken}
        onClick={handleLoadNextSermons}
      >
        Próximo
      </Button>
    </Flex>
  )
}
