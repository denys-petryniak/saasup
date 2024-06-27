// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // https://github.com/antfu/eslint-config
  antfu({
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
    },
    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      '**/component-types-sb.d.ts',
      '**/components.245408.json',
      // ...globs
    ],
  }),
)
