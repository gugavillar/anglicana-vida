import { ReactNode } from 'react'

import {
  Skeleton,
  type SkeletonProps,
  useBreakpointValue,
} from '@chakra-ui/react'

import { SwiperContainer } from '../../SwiperContainer'

type ContainerCardsProps = SkeletonProps & {
  children: ReactNode
  breakPointObject: Record<string, number>
}

export const SwiperContainerCards = ({
  children,
  isLoaded,
  breakPointObject,
  ...props
}: ContainerCardsProps) => {
  const slidesPerView = useBreakpointValue(breakPointObject)
  return (
    <Skeleton
      isLoaded={isLoaded}
      alignSelf="center"
      minWidth="full"
      maxWidth="inherit"
      display="flex"
      flexGrow={1}
      {...props}
    >
      <SwiperContainer
        slidesPerView={slidesPerView}
        spaceBetween={25}
        isAutoplay
      >
        {children}
      </SwiperContainer>
    </Skeleton>
  )
}
