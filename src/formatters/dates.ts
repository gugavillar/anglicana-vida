import { format, parseISO } from 'date-fns'
import * as locale from 'date-fns/locale'

const ptBR = locale.ptBR

export const dayOfMonth = (date: string) =>
  format(parseISO(date), 'dd', {
    locale: ptBR,
  })

export const monthAbbreviation = (date: string) =>
  format(parseISO(date), 'MMMM', { locale: ptBR })

export const dayOfWeekNameAndDayMonthYear = (date: string) =>
  format(parseISO(date), 'cccc, dd/MM', { locale: ptBR })

export const hourAndMinutes = (date: string) =>
  format(parseISO(date), 'HH:mm', { locale: ptBR })

export const dayOfWeekReplace = (day: string) => {
  if (!day) return ''

  if (day.includes('-feira')) return day.replace('-feira', '')

  return day
}
