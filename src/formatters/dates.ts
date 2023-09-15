import { format, isFuture, isPast, parse } from 'date-fns'
import * as locale from 'date-fns/locale'

const ptBR = locale.ptBR

const getNumberDate = (date: string, formatString = 'yyyy-MM-dd') => {
  if (!date) return NaN

  return parse(date, formatString, new Date(), {
    locale: ptBR,
  }).getTime()
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

export const dayOfMonth = (date: string) => {
  if (!date) return ''

  const dateFormatted = getNumberDate(date)

  if (isNaN(dateFormatted)) return ''

  return format(new Date(dateFormatted), 'dd', {
    locale: ptBR,
  })
}

export const monthAbbreviation = (date: string) => {
  if (!date) return ''

  const dateFormatted = getNumberDate(date)

  if (isNaN(dateFormatted)) return ''

  return format(new Date(dateFormatted), 'MMMM', { locale: ptBR })
}

export const dayOfWeekNameAndDayMonthYear = (date: string) => {
  if (!date) return ''

  const dateFormatted = getNumberDate(date)

  if (isNaN(dateFormatted)) return ''

  return format(new Date(dateFormatted), 'cccc, dd/MM', { locale: ptBR })
}

export const dayOfWeekReplace = (day: string) => {
  if (!day) return ''

  if (day.includes('-feira')) return day.replace('-feira', '')

  return day
}
