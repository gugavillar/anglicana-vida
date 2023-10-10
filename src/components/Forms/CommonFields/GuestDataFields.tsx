import { Flex, VStack } from '@chakra-ui/react'

import { Controller, useFormContext } from 'react-hook-form'

import { FieldContainer, InputField, MaskedInputField } from '@/components'

type GuestDataFieldsForm = {
  guestName: string
  guestPhone: string
}

export const defaultGuestDataFieldsValue = {
  guestName: '',
  guestPhone: '',
}

export const GuestDataFields = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<GuestDataFieldsForm>()

  return (
    <VStack width="full" spacing={4}>
      <Flex
        align="center"
        justify="center"
        gap={6}
        width="full"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <FieldContainer
          label="Nome de quem lhe convidou"
          isInvalid={!!errors?.guestName?.message}
          errorText={errors?.guestName?.message}
        >
          <InputField
            type="text"
            placeholder="Nome"
            {...register('guestName')}
          />
        </FieldContainer>
        <Controller
          control={control}
          name="guestPhone"
          render={({ field }) => (
            <FieldContainer
              label="Telefone"
              isInvalid={!!errors.guestPhone?.message}
              errorText={errors.guestPhone?.message}
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
      </Flex>
    </VStack>
  )
}
