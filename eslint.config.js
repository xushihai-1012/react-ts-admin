import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import process from 'node:process'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    ignores: ['node_modules', 'dist', 'public'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
      ecmaVersion: 12, // 使用最新的 ECMAScript 语法
      sourceType: 'module', // 代码是 ECMAScript 模块
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: { version: 'detect' },
    },
  },
  eslintPluginPrettierRecommended,
  // 自定义规则
  {
    rules: {
      'indent': ['error', 2], // 缩进使用 2 个空格
      'linebreak-style': ['error', 'unix'], // 使用 windows | Unix 风格的换行符
      'quotes': ['error', 'single'], // 使用单引号
      'semi': ['error', 'never'], // 语句末尾不加分号
      'react/react-in-jsx-scope': 'off', //安全地禁用'React' must be in scope when using JSX 提示
      'react/jsx-uses-react': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境中警告 console 使用，开发环境中关闭规则
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境中警告 debugger 使用，开发环境中关闭规则
    },
  },
]
