module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript', 
    'plugin:react/jsx-runtime', 
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['react-refresh', "import"],
  rules: {
    "quotes": [2, "single", { "avoidEscape": true }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/indent": "off",
  },
}
