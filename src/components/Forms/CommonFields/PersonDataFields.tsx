import { VStack } from '@chakra-ui/react'

import { LEVEL_OF_EDUCATION } from '@/constants'

import { AddressData } from './AddressData'
import { ChurchAndReligion } from './ChurchAndReligion'
import { DateOfBirthAndPhoneAndEducation } from './DateOfBirthAndPhoneAndEducation'
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
}

type PersonDataFieldsProps = {
  states: Array<{ label: string; value: string }>
}

export const PersonDataFields = ({ states }: PersonDataFieldsProps) => {
  return (
    <VStack spacing={4} width="full">
      <NameAndBeCalled />
      <DateOfBirthAndPhoneAndEducation />
      <ChurchAndReligion />
      <AddressData states={states} />
    </VStack>
  )
}
