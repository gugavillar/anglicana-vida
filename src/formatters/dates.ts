import { format, parseISO } from 'date-fns'
import * as locale from 'date-fns/locale'

const ptBR = locale.ptBR

const getNumberISODate = (date: string) => {
  if (!date) return NaN

  return parseISO(date).getTime()
}

export const formatISODate = (date: string) => {
  if (!date) return ''

  const dateFormatted = getNumberISODate(date)

  if (isNaN(dateFormatted)) return ''

  return format(new Date(dateFormatted), 'dd/MM/yyyy', { locale: ptBR })
}
