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
      solid: {
        backgroundColor: '#3b4d69',
        height: 12,
        width: 32,
        color: 'white',
        _hover: { opacity: 0.8, backgroundColor: '#3b4d69' },
        _disabled: {
          cursor: 'not-allowed',
          opacity: 0.2,
          backgroundColor: '#3b4d69 !important',
          _hover: {
            opacity: 0.2,
          },
        },
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
