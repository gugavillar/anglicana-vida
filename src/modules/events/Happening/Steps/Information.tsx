import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'

type InformationProps = {
  year: string
  eventText: string
}

export const Information = ({ eventText, year }: InformationProps) => {
  return (
    <Flex
      direction="column"
      justify="center"
      maxWidth="64rem"
      align="center"
      mx="auto"
      textAlign="center"
    >
      <VStack spacing={4}>
        <Heading fontSize="2xl">Antes de prosseguir leia com atenção!</Heading>
        <Box>
          <Text fontWeight={600} fontSize="lg">
            Não será assim entre vós. Ao contrário, quem desejar ser importante
            entre vós será esse o que deva servir aos demais.
          </Text>
          <Text textAlign="end">
            <em>Mateus 20:26</em>
          </Text>
        </Box>

        <Text>Sejam bem-vindos ao Happening Brasil - Vida {year}</Text>
        <Text maxWidth="40rem">
          O evento acontecerá de {eventText}, sua presença é importante para
          DEUS e para nós. <br />
          Na sexta-feira você pode se dirigir ao Rancho a partir das 13h
        </Text>
        <Text maxWidth="40rem">
          Favor preencha suas informações, ao final você encontrará o QRCODE
          para pagamento. <br />
          Desde já estamos orando pela sua vida e pelo seu servir no Reino de
          Deus.
        </Text>
        <Box maxWidth="40rem">
          <Text>
            Maiores informações entrar em contato através dos telefones abaixo:
          </Text>
          <Text>Ministro Leonardo (81) 9.8976-3092</Text>
          <Text>Ministro Linaldo (81) 9.9398-3610</Text>
        </Box>
      </VStack>
    </Flex>
  )
}
