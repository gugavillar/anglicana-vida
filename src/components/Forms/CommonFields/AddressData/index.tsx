import { Flex } from '@chakra-ui/react'

import { useFormContext } from 'react-hook-form'

import {
  FieldContainer,
  InputField,
  PersonDataFieldsForm,
  SelectField,
} from '@/components'

import { SelectOption } from '@/types/common'

import { useAddressData } from './useAddressData'

type AddressDataFormType = Pick<PersonDataFieldsForm, 'address'>

type AddressDataProps = {
  states: SelectOption
}

export const AddressData = ({ states }: AddressDataProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<AddressDataFormType>()

  const state = watch('address.state')

  const { cities } = useAddressData(state)

  return (
    <>
      <Flex
        align="center"
        justify="center"
        gap={6}
        width="full"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <FieldContainer
          label="Endereço"
          isInvalid={!!errors?.address?.street?.message}
          errorText={errors?.address?.street?.message}
        >
          <InputField
            type="text"
            placeholder="Rua"
            {...register('address.street')}
          />
        </FieldContainer>
        <FieldContainer
          isInvalid={!!errors?.address?.number?.message}
          errorText={errors?.address?.number?.message}
          label="N˚"
          maxWidth={{ base: 'full', md: '6rem', lg: '6rem' }}
        >
          <InputField
            type="text"
            placeholder="N˚"
            {...register('address.number')}
          />
        </FieldContainer>
      </Flex>
      <Flex
        align="center"
        justify="center"
        gap={6}
        width="full"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <FieldContainer
          label="Bairro"
          isInvalid={!!errors?.address?.neighborhood?.message}
          errorText={errors?.address?.neighborhood?.message}
        >
          <InputField
            type="text"
            placeholder="Bairro"
            {...register('address.neighborhood')}
          />
        </FieldContainer>
        <FieldContainer
          label="Estado"
          isInvalid={!!errors?.address?.state?.message}
          errorText={errors?.address?.state?.message}
          maxWidth={{ base: 'full', md: '14rem', lg: '14rem' }}
        >
          <SelectField
            defaultValue=""
            placeholder="UF"
            {...register('address.state')}
            options={states}
          />
        </FieldContainer>
        <FieldContainer
          label="Cidade"
          isInvalid={!!errors?.address?.city?.message}
          errorText={errors?.address?.city?.message}
        >
          <SelectField
            defaultValue=""
            placeholder="Cidade"
            options={cities}
            {...register('address.city')}
          />
        </FieldContainer>
      </Flex>
    </>
  )
}
