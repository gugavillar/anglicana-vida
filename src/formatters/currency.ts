export const currencyFieldValue = (value: string) => {
  if (!value) return ''

  if (value === '000') return ''

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
    .format(Number(value) / 100)
    .replace('R$', '')
}

export const removeCurrencyFormat = (value: string) => {
  if (!value) return ''
  const newValue = value.replace(/\./g, '')
  return newValue.replace(/,/g, '.')
}
