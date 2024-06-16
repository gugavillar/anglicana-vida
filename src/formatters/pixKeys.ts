const formatCpf = (value: string) =>
  value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

const formatCnpj = (value: string) =>
  value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')

const formatPhone = (value: string) =>
  value.replace(/\+(\d{2})(\d{2})(\d{5})(\d{4})/, '($2) $3-$4')

export const pixKeys = (pixKey: string) => {
  if (!pixKey) return ''
  if (pixKey.match(/@/g)) return pixKey
  if (pixKey.match(/\+/g)) return formatPhone(pixKey)
  if (pixKey.length === 11) return formatCpf(pixKey)
  if (pixKey.length === 14) return formatCnpj(pixKey)
  return pixKey
}
