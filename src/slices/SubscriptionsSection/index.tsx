import { useEffect, useState } from 'react'

import { createClient } from '@/prismicio'
import { isFilled, type Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Skeleton, useBreakpointValue, useToast } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

import {
  ContentContainer,
  H3,
  SubscriptionCard,
  SwiperContainer,
} from '@/components'

import { SubscriptionDocument } from '../../../prismicio-types'

type SubscriptionSectionProps =
  SliceComponentProps<Content.SubscriptionSectionSlice>

const SubscriptionSection = ({
  slice,
}: SubscriptionSectionProps): JSX.Element => {
  const [subscriptions, setSubscriptions] = useState<
    Array<SubscriptionDocument<string>>
  >([])

  const slidesPerView = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  })
  const client = createClient()
  const toast = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await Promise.all(
          slice?.items?.map(async (item) => {
            if (!isFilled.contentRelationship(item?.subscriptions)) return
            return await client.getByUID(
              'subscription',
              item?.subscriptions?.uid as string,
            )
          }),
        )
        setSubscriptions(data as Array<SubscriptionDocument<string>>)
      } catch {
        toast({
          status: 'error',
          description: 'Falha ao carregar os eventos.',
        })
      }
    }
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ContentContainer id="subscriptions">
      <H3>{slice?.primary?.title}</H3>
      <Skeleton
        isLoaded={!!subscriptions?.length}
        height={570}
        maxWidth="inherit"
        alignSelf="center"
        minWidth="full"
      >
        <SwiperContainer
          slidesPerView={slidesPerView}
          spaceBetween={25}
          isAutoplay
          height={570}
        >
          {subscriptions?.map((item) => (
            <SwiperSlide key={item?.id}>
              <SubscriptionCard data={item.data} />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </Skeleton>
    </ContentContainer>
  )
}

export default SubscriptionSection
