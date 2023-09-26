import { type Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import {
  VStack,
  Text,
  Skeleton,
  HStack,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

import {
  ContentContainer,
  H3,
  SwiperContainer,
  DiscipleshipCard,
} from '@/components'

import { roboto } from '@/fonts/roboto'

import { useDiscipleship } from './useDiscipleship'

type DiscipleshipGroupsProps =
  SliceComponentProps<Content.DiscipleshipGroupsSlice>

const descriptionComponent: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Text
      lineHeight="30px"
      fontFamily={roboto.style.fontFamily}
      fontSize="lg"
      textAlign="justify"
      textIndent="3rem"
    >
      {children}
    </Text>
  ),
}

const DiscipleshipGroups = ({
  slice,
}: DiscipleshipGroupsProps): JSX.Element => {
  const slidesPerView = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  })
  const { discipleship } = useDiscipleship(slice)

  return (
    <ContentContainer id="discipleship" bg="pampas.50">
      <HStack
        spacing={8}
        mx="auto"
        flexDirection={{
          base: 'column-reverse',
          md: 'column-reverse',
          lg: 'row',
        }}
      >
        <VStack maxWidth={{ base: 'full', md: '40rem', lg: 'full' }}>
          <H3>{slice?.primary?.title}</H3>
          <PrismicRichText
            components={descriptionComponent}
            field={slice?.primary?.description}
          />
        </VStack>
        <Image
          maxHeight={414}
          borderRadius={8}
          src={slice?.primary?.image?.url as string}
          alt={slice?.primary?.image?.alt as string}
        />
      </HStack>
      <Skeleton
        isLoaded={!!discipleship?.length}
        maxWidth="inherit"
        alignSelf="center"
        mt={8}
        minWidth="full"
        height="xs"
      >
        <SwiperContainer
          slidesPerView={slidesPerView}
          spaceBetween={25}
          isAutoplay
        >
          {discipleship?.map((item) => (
            <SwiperSlide key={item?.id}>
              <DiscipleshipCard data={item?.data} />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </Skeleton>
    </ContentContainer>
  )
}

export default DiscipleshipGroups
