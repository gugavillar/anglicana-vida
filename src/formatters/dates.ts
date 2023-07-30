import { format, parse } from 'date-fns'
import * as locale from 'date-fns/locale'

const ptBR = locale.ptBR

export const dayOfMonth = (date: string) =>
  format(parse(date, 'yyyy-MM-dd', new Date()), 'dd', {
    locale: ptBR,
  })

export const monthAbbreviation = (date: string) =>
  format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM', { locale: ptBR })

export const dayOfWeekNameAndHourWithMinutes = (date: Date) =>
  format(date, 'cccc, HH:mm', { locale: ptBR })

export const dayOfWeekReplace = (day: string) => {
  if (!day) return ''

  if (day.includes('-feira')) return day.replace('-feira', '')

  return day
}
