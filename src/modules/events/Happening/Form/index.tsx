import { IfComponent } from '@/components'

import { SelectOption } from '@/types/common'

import { Introduction } from './Introduction'
import { SubscriptionForm } from './SubscriptionForm'

type HappeningFormProps = {
  isFormStarted: boolean
  setIsFormStarted: {
    on: () => void
  }
  eventText: string
  year: string
  states: SelectOption
}

export const HappeningForm = ({
  isFormStarted,
  states,
  ...rest
}: HappeningFormProps) => {
  return (
    <>
      <IfComponent
        condition={!isFormStarted}
        component={<Introduction {...rest} />}
      />
      <IfComponent
        condition={isFormStarted}
        component={<SubscriptionForm states={states} />}
      />
    </>
  )
}
