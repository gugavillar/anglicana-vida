import { useRouter } from 'next/router'

import { SubscriptionDocument } from '@/prismic-types'

import { formatDate, isFutureDate, isPassedDate } from '@/formatters'

const getBadgeText = (openDate: string, closeDate: string) => {
  if (isFutureDate(openDate)) return 'Em breve'

  if (isPassedDate(openDate) && isFutureDate(closeDate))
    return 'Inscrições abertas'

  return 'Inscrições encerradas'
}

const generateEventUrl = (eventName: string, eventEdition: number) => {
  const transformedEventNameIntoURL = eventName.replace(' ', '').toLowerCase()
  return `/eventos/${transformedEventNameIntoURL}/${eventEdition}/inscricao`
}

const formatDatesFromEvent = (initialDate: string, finalDate: string) => {
  const formattedInitialDate = formatDate(initialDate)
  const formattedFinalDate = formatDate(finalDate)

  return {
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

export const useEventCardWithSubscription = (
  subscriptionObjectProperty: SubscriptionDocument<string>['data'] | undefined,
) => {
  const { push } = useRouter()

  if (!subscriptionObjectProperty) return null

  const badgeTextParticipants = getBadgeText(
    subscriptionObjectProperty.participant_subscription_open_date as string,
    subscriptionObjectProperty.participant_subscription_close_date as string,
  )

  const badgeTextVolunteers = getBadgeText(
    subscriptionObjectProperty.volunteer_subscription_open_date as string,
    subscriptionObjectProperty.volunteer_subscription_close_date as string,
  )

  const isOpenSubscription =
    badgeTextParticipants === 'Inscrições abertas' ||
    badgeTextVolunteers === 'Inscrições abertas'

  const formattedEventDates = formatDatesFromEvent(
    subscriptionObjectProperty.initial_date as string,
    subscriptionObjectProperty.final_date as string,
  )

  const formattedEventTextAndYear = formatEventTextAndYear(
    subscriptionObjectProperty.initial_date as string,
    subscriptionObjectProperty.final_date as string,
  )

  const titleOfPage = generateEventTitle(
    subscriptionObjectProperty.title as string,
    subscriptionObjectProperty.initial_date as string,
    subscriptionObjectProperty.edition as number,
  )

  const urlToSubscriptionPage = generateEventUrl(
    subscriptionObjectProperty?.title as string,
    subscriptionObjectProperty.edition as number,
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
