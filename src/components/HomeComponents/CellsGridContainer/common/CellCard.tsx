import { Box } from '@chakra-ui/react'

import { GradientText } from '@/components/GradientText'

import { CellInformation } from './CellInformation'
import { CellNameAndLocation } from './CellNameAndLocation'
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
      <GradientText text="Kids" mb={4} />
      <CellNameAndLocation name={card.name} location={card.location} />
      <CellInformation
        initialTime={card.initial_time}
        leader={card.leader}
        weekDay={card.week_day}
      />
    </Box>
  )
}
