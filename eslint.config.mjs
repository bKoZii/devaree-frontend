// @ts-check
import json from 'eslint-plugin-jsonc'
import tailwindcss from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'vue/no-empty-component-block': 'warn',
    'vue/block-tag-newline': ['warn', { singleline: 'always', multiline: 'always', maxEmptyLines: 1 }],
    'vue/block-order': ['warn', { order: ['template', 'script', 'style'] }],
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'vue/max-attributes-per-line': ['warn', { singleline: 1, multiline: { max: 1 } }],
  },
},
).prepend(...tailwindcss.configs['flat/recommended'], json.configs['flat/base'])
