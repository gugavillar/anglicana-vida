import { useRouter } from 'next/router'

type UseSubscriptionEventParams = {
  urlPath: string
  badgeText: string
}

export const useSubscriptionEvent = ({
  urlPath,
  badgeText,
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
        },
      },
      urlToForm,
    )

  return { handleGoToForm, isOpenSubscription }
}
