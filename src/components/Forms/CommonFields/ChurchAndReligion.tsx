import { Flex } from '@chakra-ui/react'

import { useFormContext } from 'react-hook-form'

import { FieldContainer, InputField } from '@/components'

import { PersonDataFieldsForm } from './PersonDataFields'

type ChurchAndReligionFormType = Pick<
  PersonDataFieldsForm,
  'attendsChurch' | 'yourReligion'
>

export const ChurchAndReligion = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ChurchAndReligionFormType>()
  return (
    <Flex
      align="center"
      justify="center"
      gap={6}
      width="full"
      direction={{ base: 'column', md: 'row', lg: 'row' }}
    >
      <FieldContainer
        label="Qual sua religião?"
        isInvalid={!!errors?.yourReligion?.message}
        errorText={errors?.yourReligion?.message}
      >
        <InputField
          type="text"
          placeholder="Sua religião"
          {...register('yourReligion')}
        />
      </FieldContainer>
      <FieldContainer
        isInvalid={!!errors?.attendsChurch?.message}
        errorText={errors?.attendsChurch?.message}
        label="Frequenta atualmente alguma igreja?"
      >
        <InputField
          type="text"
          placeholder="Nome da igreja que frequenta"
          {...register('attendsChurch')}
        />
      </FieldContainer>
    </Flex>
  )
}
