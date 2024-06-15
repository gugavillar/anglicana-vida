export const components = {
  Button: {
    variants: {
      ghost: {
        cursor: 'pointer',
        padding: 0,
        _hover: { backgroundColor: 'transparent' },
        fontWeight: 400,
        height: 'inherit',
      },
    },
  },
  Heading: {
    variants: {
      subTitle: {
        fontSize: () => ({ base: '1.25rem', md: '1.75rem', lg: '2rem' }),
      },
      title: {
        fontSize: () => ({ base: '1.5rem', md: '2.25rem', lg: '3rem' }),
      },
      cardTitle: {
        fontSize: () => ({ base: '1.125rem', md: '1.25rem', lg: '1.375rem' }),
        lineHeight: '1.75rem',
      },
    },
  },
}
