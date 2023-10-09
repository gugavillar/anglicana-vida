import { useRouter } from 'next/router'

type UseSubscriptionEventParams = {
  urlPath: string
  badgeText: string
  year: string
  eventText: string
}

export const useSubscriptionCard = ({
  urlPath,
  badgeText,
  year,
  eventText,
}: UseSubscriptionEventParams) => {
  const { asPath, push } = useRouter()
  const urlToForm = `${asPath}/${urlPath}/formulario`

  const isOpenSubscription = badgeText === 'Inscrições abertas'

  const handleGoToForm = () =>
    push(
      {
        pathname: urlToForm,
        query: {
          isOpenSubscription,
          year,
          eventText,
        },
      },
      urlToForm,
    )

  return { handleGoToForm, isOpenSubscription }
}
