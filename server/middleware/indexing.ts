export default defineEventHandler((event) => {
  // eslint-disable-next-line node/prefer-global/process
  if (process.env.NUXT_PUBLIC_NODE_ENV === 'preview')
    setHeader(event, 'X-Robots-Tag', 'noindex')
})
