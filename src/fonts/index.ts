import { Roboto_Condensed as RobotoCondensed, Nunito } from 'next/font/google'

export const roboto = RobotoCondensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

export const nunito = Nunito({
  weight: ['400'],
  subsets: ['latin'],
})
