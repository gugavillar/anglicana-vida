import { IfComponent } from '@/components'

import { Introduction } from './Introduction'
import { SubscriptionForm } from './SubscriptionForm'

type HappeningFormProps = {
  isFormStarted: boolean
  setIsFormStarted: {
    on: () => void
  }
  eventText: string
  year: string
  states: Array<{ label: string; value: string }>
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
