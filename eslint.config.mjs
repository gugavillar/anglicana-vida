import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const eslintConfig = [
  {
    ignores: ['**/prismicio-types.d.ts', '.next/*'],
  },
  ...fixupConfigRules(
    compat.extends(
      '@rocketseat/eslint-config/next',
      'plugin:import/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'next/core-web-vitals',
    ),
  ),
  {
    languageOptions: {
      globals: {
        JSX: true,
      },
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      'import/order': [
        'error',
        {
          groups: [
            ['external', 'builtin'],
            'internal',
            ['parent', 'sibling'],
            ['object', 'type'],
            'index',
          ],

          pathGroups: [
            {
              pattern: '{react,react-dom/**,next,next/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{@/components,@/components/Icons}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern:
                '{@prismicio/**,@prismicio/*,@/prismicio,@/prismic-types}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{@chakra-ui/**,@chakra-ui/*}',
              group: 'external',
              position: 'before',
            },
          ],

          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      'import/ignore': ['node_modules/@chakra-ui/react'],
      'import/resolver': {
        typescript: {},
      },
    },
  },
]

export default eslintConfig
