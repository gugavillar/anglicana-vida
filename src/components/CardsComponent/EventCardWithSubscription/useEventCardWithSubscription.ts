import { useRouter } from 'next/router'

import { formatDate, isFutureDate, isPassedDate } from '@/formatters'

import type { SubscriptionCardProps } from '.'

const getBadgeText = (openDate: string, closeDate: string) => {
  if (isFutureDate(openDate)) return 'Em breve'

  if (isPassedDate(openDate) && isFutureDate(closeDate))
    return 'Inscrições abertas'

  return 'Inscrições encerradas'
}

const generateEventUrl = (eventName: string, eventEdition: number) => {
  const transformedEventNameIntoURL = eventName.replace(/\s/g, '').toLowerCase()
  return `/eventos/${transformedEventNameIntoURL}/${eventEdition}/inscricao`
}

const formatDatesFromEvent = (initialDate: string, finalDate: string) => {
  const formattedInitialDate = formatDate(initialDate)
  const formattedFinalDate = formatDate(finalDate)

  return {
    isSameDate: formattedInitialDate === formattedFinalDate,
    formattedInitialDate,
    formattedFinalDate,
  }
}

const formatEventTextAndYear = (initialDate: string, finalDate: string) => {
  const formattedInitialDay = formatDate(initialDate, 'dd')
  const formattedInitialMonth = formatDate(initialDate, 'MMMM')
  const formattedFinalDay = formatDate(finalDate, 'dd')
  const formattedFinalMonth = formatDate(finalDate, 'MMMM')
  const formattedYear = formatDate(initialDate, 'yyyy')

  const isSameDate = initialDate === finalDate

  if (isSameDate) {
    return {
      eventText: `${formattedInitialDay} de ${formattedInitialMonth}`,
      formattedYear,
    }
  }

  const isSameMonth = formattedInitialMonth === formattedFinalMonth

  const eventText = isSameMonth
    ? `${formattedInitialDay} a ${formattedFinalDay} de ${formattedInitialMonth}`
    : `${formattedInitialDay} de ${formattedInitialMonth} a ${formattedFinalDay} de ${formattedFinalMonth}`

  return {
    eventText,
    formattedYear,
  }
}

const generateEventTitle = (
  eventName: string,
  initialDate: string,
  eventEdition: number,
) => {
  const year = formatDate(initialDate, 'yyyy')
  return `${eventName} ${year}.${eventEdition}`
}

export const useEventCardWithSubscription = ({
  subscriptionObjectProperty,
}: SubscriptionCardProps) => {
  const { push } = useRouter()

  if (!subscriptionObjectProperty) return null

  const badgeTextParticipants = getBadgeText(
    subscriptionObjectProperty.data
      .participant_subscription_open_date as string,
    subscriptionObjectProperty.data
      .participant_subscription_close_date as string,
  )

  const badgeTextVolunteers =
    subscriptionObjectProperty.type ===
      'subscription_volunteers_and_participants' &&
    getBadgeText(
      subscriptionObjectProperty.data
        .volunteer_subscription_open_date as string,
      subscriptionObjectProperty.data
        .volunteer_subscription_close_date as string,
    )

  const isOpenSubscription =
    badgeTextParticipants === 'Inscrições abertas' ||
    badgeTextVolunteers === 'Inscrições abertas'

  const formattedEventDates = formatDatesFromEvent(
    subscriptionObjectProperty.data.event_initial_date as string,
    subscriptionObjectProperty.data.event_final_date as string,
  )

  const formattedEventTextAndYear = formatEventTextAndYear(
    subscriptionObjectProperty.data.event_initial_date as string,
    subscriptionObjectProperty.data.event_final_date as string,
  )

  const titleOfPage = generateEventTitle(
    subscriptionObjectProperty.data.title as string,
    subscriptionObjectProperty.data.event_initial_date as string,
    subscriptionObjectProperty.data.edition as number,
  )

  const urlToSubscriptionPage = generateEventUrl(
    subscriptionObjectProperty.data.title as string,
    subscriptionObjectProperty.data.edition as number,
  )

  const handleNavigateToSubscription = () =>
    push(
      {
        pathname: urlToSubscriptionPage,
        query: {
          isOpenSubscription,
          badgeTextParticipants,
          badgeTextVolunteers,
          titleOfPage,
          ...formattedEventTextAndYear,
        },
      },
      urlToSubscriptionPage,
    )

  return {
    isOpenSubscription,
    ...formattedEventDates,
    handleNavigateToSubscription,
  }
}
