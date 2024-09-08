import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierRecommendedConfig from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        ignores: ['dist/**/*.*'],
    },
    {
        languageOptions: {
            parser: tseslint.parser,
            sourceType: 'module',
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        rules: {
            'no-console': 'warn',
        },
    },
    prettierRecommendedConfig,
)
