import { Flex } from '@chakra-ui/react'

import { Controller, useFormContext } from 'react-hook-form'

import {
  FieldContainer,
  MaskedInputField,
  PersonDataFieldsForm,
  SelectField,
} from '@/components'

import { LEVEL_OF_EDUCATION } from '@/constants'

type DateOfBirthAndPhoneAndEducationFormType = Pick<
  PersonDataFieldsForm,
  'dateOfBirth' | 'levelOfEducation' | 'phone'
>

export const DateOfBirthAndPhoneAndEducation = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<DateOfBirthAndPhoneAndEducationFormType>()
  return (
    <Flex
      align="center"
      justify="center"
      gap={6}
      width="full"
      direction={{ base: 'column', md: 'row', lg: 'row' }}
    >
      <Controller
        control={control}
        name="dateOfBirth"
        render={({ field }) => (
          <FieldContainer
            label="Data de nascimento"
            isInvalid={!!errors.dateOfBirth?.message}
            errorText={errors.dateOfBirth?.message}
            maxWidth={{ base: 'full', md: '12rem', lg: '21.5rem' }}
          >
            <MaskedInputField
              format="##/##/####"
              placeholder="Data de nascimento"
              {...field}
            />
          </FieldContainer>
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <FieldContainer
            label="Telefone"
            isInvalid={!!errors.phone?.message}
            errorText={errors.phone?.message}
            maxWidth={{ base: 'full', md: '12rem', lg: '21.5rem' }}
          >
            <MaskedInputField
              format="(##) #####-####"
              type="text"
              placeholder="Telefone"
              {...field}
            />
          </FieldContainer>
        )}
      />
      <FieldContainer
        label="Escolaridade"
        isInvalid={!!errors.levelOfEducation?.message}
        errorText={errors.levelOfEducation?.message}
      >
        <SelectField
          placeholder="Selecione a escolaridade"
          defaultValue=""
          options={LEVEL_OF_EDUCATION}
          {...register('levelOfEducation')}
        />
      </FieldContainer>
    </Flex>
  )
}
