import { Flex } from '@chakra-ui/react'

import { useFormContext } from 'react-hook-form'

import { FieldContainer, InputField, PersonDataFieldsForm } from '@/components'

type NameAndBeCalledFormType = Pick<PersonDataFieldsForm, 'name' | 'beCalled'>

export const NameAndBeCalled = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NameAndBeCalledFormType>()
  return (
    <Flex
      align="center"
      justify="center"
      gap={6}
      width="full"
      direction={{ base: 'column', md: 'row', lg: 'row' }}
    >
      <FieldContainer
        label="Nome"
        isInvalid={!!errors?.name?.message}
        errorText={errors?.name?.message}
      >
        <InputField
          type="text"
          placeholder="Nome completo"
          {...register('name')}
        />
      </FieldContainer>
      <FieldContainer
        isInvalid={!!errors?.beCalled?.message}
        errorText={errors?.beCalled?.message}
        label="Como prefere ser chamado?"
        maxWidth={{ base: 'full', md: '21.75rem', lg: '25rem' }}
      >
        <InputField type="text" placeholder="Nome" {...register('beCalled')} />
      </FieldContainer>
    </Flex>
  )
}
