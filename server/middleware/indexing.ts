import process from 'node:process'

export default defineEventHandler((event) => {
  const IS_PREVIEW = process.env.NUXT_PUBLIC_NODE_ENV === 'preview'

  if (IS_PREVIEW)
    setHeader(event, 'X-Robots-Tag', 'noindex')
})
