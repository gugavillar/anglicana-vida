import { useRouter } from 'next/router'

type UseSubscriptionEventParams = {
  urlPath: string
}

export const useSubscriptionEvent = ({
  urlPath,
}: UseSubscriptionEventParams) => {
  const { asPath, push } = useRouter()

  const handleGoToForm = () =>
    push({
      pathname: `${asPath}/${urlPath}/formulario`,
    })

  return { handleGoToForm }
}
