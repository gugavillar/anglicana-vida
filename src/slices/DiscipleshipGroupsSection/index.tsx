import { useEffect, useState } from 'react'

import { createClient } from '@/prismicio'
import { isFilled, type Content } from '@prismicio/client'
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
  useToast,
} from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

import {
  ContentContainer,
  H3,
  SwiperContainer,
  DiscipleshipCard,
} from '@/components'

import { roboto } from '@/fonts/roboto'

import { DiscipleshipDocument } from '../../../prismicio-types'

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
  const [discipleship, setDiscipleship] = useState<
    Array<DiscipleshipDocument<string>>
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
            if (!isFilled.contentRelationship(item?.discipleships)) return
            return await client.getByUID(
              'discipleship',
              item?.discipleships?.uid as string,
            )
          }),
        )
        setDiscipleship(data as Array<DiscipleshipDocument<string>>)
      } catch {
        toast({
          status: 'error',
          description: 'Falha ao carregar os grupos de discipulados.',
        })
      }
    }
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ContentContainer bg="pampas.50">
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
        height={300}
        maxWidth="inherit"
        alignSelf="center"
        mt={8}
      >
        <SwiperContainer
          slidesPerView={slidesPerView}
          spaceBetween={25}
          isAutoplay
          height={300}
          py={4}
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
