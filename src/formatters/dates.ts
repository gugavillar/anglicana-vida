import { isFuture, isPast, parse, format } from 'date-fns'
import * as locale from 'date-fns/locale'

const ptBR = locale.ptBR

const getNumberDate = (date: string, formatString = 'yyyy-MM-dd') => {
  if (!date) return NaN

  return parse(date, formatString, new Date(), {
    locale: ptBR,
  }).getTime()
}

export const formatDate = (date: string) => {
  if (!date) return ''

  const dateFormatted = getNumberDate(date)

  if (isNaN(dateFormatted)) return ''

  return format(new Date(dateFormatted), 'dd/MM')
}

export const isPassedDate = (date: string) => {
  if (!date) return false

  const dateFormatted = getNumberDate(date)

  if (isNaN(dateFormatted)) return false

  return isPast(new Date(dateFormatted))
}

export const isFutureDate = (date: string) => {
  if (!date) return false

  const dateFormatted = getNumberDate(date)

  if (isNaN(dateFormatted)) return false

  return isFuture(new Date(dateFormatted))
}
