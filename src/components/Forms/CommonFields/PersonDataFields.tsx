import { VStack } from '@chakra-ui/react'

import { LEVEL_OF_EDUCATION } from '@/constants'
import { SelectOption } from '@/types/common'

import { AddressData } from './AddressData'
import { ChurchAndReligion } from './ChurchAndReligion'
import { DateOfBirthAndPhoneAndEducation } from './DateOfBirthAndPhoneAndEducation'
import { HealthAndFoodRestriction } from './HealthAndFoodRestriction'
import { NameAndBeCalled } from './NameAndBeCalled'

export type PersonDataFieldsForm = {
  name: string
  beCalled: string
  dateOfBirth: string
  phone: string
  levelOfEducation: (typeof LEVEL_OF_EDUCATION)[number]['value']
  yourReligion: string
  attendsChurch: string
  address: {
    street: string
    number: string
    city: string
    neighborhood: string
    state: string
  }
  healthProblem: string
  healthProblemDescription?: string
  foodRestriction: string
  foodRestrictionDescription?: string
}

export const defaultPersonDataFieldsValue = {
  name: '',
  beCalled: '',
  dateOfBirth: '',
  phone: '',
  levelOfEducation: '',
  yourReligion: '',
  attendsChurch: '',
  address: {
    street: '',
    number: '',
    city: '',
    neighborhood: '',
    state: '',
  },
  healthProblem: '',
  healthProblemDescription: '',
  foodRestriction: '',
  foodRestrictionDescription: '',
}

type PersonDataFieldsProps = {
  states: SelectOption
}

export const PersonDataFields = ({ states }: PersonDataFieldsProps) => {
  return (
    <VStack spacing={4} width="full">
      <NameAndBeCalled />
      <DateOfBirthAndPhoneAndEducation />
      <ChurchAndReligion />
      <AddressData states={states} />
      <HealthAndFoodRestriction />
    </VStack>
  )
}
