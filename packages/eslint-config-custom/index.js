const path = require('path');

module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'prettier',
    'next',
    'turbo',
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:json/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
    JSX: true,
  },
  plugins: [
    'prettier',
    'react',
    // 'react-native',
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-var-requires': 0,
    // '@typescript-eslint/no-unused-vars': 0,
    'no-unused-vars': 0,
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'global-require': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-multi-str': 'off',
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
    'react/prop-types': [2, { ignore: ['navigation', 'dispatch'] }],
    semi: ['error', 'always'],

    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'padding-line-between-statements': 2,
    'comma-dangle': [
      'error',
      {
        functions: 'never',
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      { arrow: true, return: true, declaration: true },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  overrides: [
    {
      files: ['ts, tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: path.join(__dirname, '../tsconfig/base.json'),
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mdx|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separator': 'error',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
