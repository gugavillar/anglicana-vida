import { Flex } from '@chakra-ui/react'

import { useFormContext } from 'react-hook-form'

import {
  FieldContainer,
  IfComponent,
  PersonDataFieldsForm,
  SelectField,
  TextareaField,
} from '@/components'

import { TRUE_OR_FALSE } from '@/constants'

type HealthAndFoodRestrictionFormType = Pick<
  PersonDataFieldsForm,
  | 'healthProblem'
  | 'foodRestriction'
  | 'healthProblemDescription'
  | 'foodRestrictionDescription'
>

export const HealthAndFoodRestriction = () => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<HealthAndFoodRestrictionFormType>()

  const [foodRestriction, healthProblem] = watch([
    'foodRestriction',
    'healthProblem',
  ])

  return (
    <>
      <Flex
        align="center"
        justify="flex-start"
        gap={6}
        width="full"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <FieldContainer
          label="Tem algum problema de saúde?"
          maxWidth={{ base: 'full', md: '25rem', lg: '25rem' }}
          isInvalid={!!errors?.healthProblem?.message}
          errorText={errors?.healthProblem?.message}
        >
          <SelectField
            options={TRUE_OR_FALSE}
            defaultValue=""
            placeholder="Selecione uma opção"
            {...register('healthProblem')}
          />
        </FieldContainer>
        <IfComponent
          condition={healthProblem === 'true'}
          component={
            <FieldContainer label="Descreva para que possamos cuidar da sua saúde durante o evento">
              <TextareaField
                resize="none"
                {...register('healthProblemDescription')}
              />
            </FieldContainer>
          }
        />
      </Flex>
      <Flex
        align="center"
        justify="flex-start"
        gap={6}
        width="full"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <FieldContainer
          label="Faz alguma dieta médica ou tem alguma restrição alimentar?"
          maxWidth={{ base: 'full', md: '25rem', lg: '25rem' }}
          isInvalid={!!errors?.foodRestriction?.message}
          errorText={errors?.foodRestriction?.message}
        >
          <SelectField
            options={TRUE_OR_FALSE}
            defaultValue=""
            placeholder="Selecione uma opção"
            {...register('foodRestriction')}
          />
        </FieldContainer>
        <IfComponent
          condition={foodRestriction === 'true'}
          component={
            <FieldContainer label="Descreva para que possamos ajustar a sua alimentação durante o evento">
              <TextareaField
                resize="none"
                {...register('foodRestrictionDescription')}
              />
            </FieldContainer>
          }
        />
      </Flex>
    </>
  )
}
