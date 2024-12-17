import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import perfectionist from 'eslint-plugin-perfectionist'
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import fsdArchitecture from 'eslint-plugin-feature-sliced-design-architecture'
import tailwind from 'eslint-plugin-tailwindcss'

/** @type {import("eslint").Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat?.recommended,
  pluginReact.configs.flat?.['jsx-runtime'],
  eslintPluginPrettierRecommended,
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      'feature-sliced-design-architecture': fsdArchitecture,
      'no-relative-import-paths': noRelativeImportPaths,
      perfectionist,
    },
    rules: {
      'feature-sliced-design-architecture/layer-imports': [
        'error',
        { alias: '@' },
      ],
      'feature-sliced-design-architecture/path-checker': [
        'error',
        { alias: '@' },
      ],
      'feature-sliced-design-architecture/public-api-imports': [
        'error',
        { alias: '@' },
      ],
      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        { allowSameFolder: false, prefix: '@', rootDir: 'src' },
      ],
      'perfectionist/sort-interfaces': ['error'],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'alphabetical',
        },
      ],
    },
    settings: {
      perfectionist: {
        partitionByComment: true,
        type: 'line-length',
      },
    },
  },
]
