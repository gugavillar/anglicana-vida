import { Box } from '@chakra-ui/react'

import { CellInformation } from './CellInformation'
import { CellNameAndDescription } from './CellNameAndDescription'
import { CellType } from './CellType'
import { CellCardType } from '../../home'

type CellCardProps = {
  card: CellCardType
}

export const CellCard = ({ card }: CellCardProps) => {
  return (
    <Box
      px={8}
      py={12}
      maxWidth="18.75rem"
      minHeight="22.9375rem"
      bg="serenade.50"
      boxShadow="base"
      borderBottom="1rem solid"
      borderBottomColor="#ffd0a0"
    >
      <CellType type={card.type} />
      <CellNameAndDescription name={card.name} location={card.description} />
      <CellInformation
        initialTime={card.initial_time}
        leader={card.leader}
        weekDay={card.week_day}
      />
    </Box>
  )
}
