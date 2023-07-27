import { Image, Grid, GridItem } from '@chakra-ui/react'

import type { Simplify, SummaryAboutUsSlice } from '../../../prismicio-types'

type ImagesProps = {
  itens: Simplify<SummaryAboutUsSlice>['items']
}

export const Images = ({ itens }: ImagesProps) => {
  return (
    <Grid
      gap={6}
      templateColumns={{
        base: '1fr',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      maxWidth="64rem"
      px={4}
    >
      {itens?.map((item, index) => {
        return (
          <GridItem key={index}>
            <Image
              src={item.image?.url as string}
              alt={item?.image?.alt as string}
              borderRadius={30}
              objectFit="cover"
            />
          </GridItem>
        )
      })}
    </Grid>
  )
}
