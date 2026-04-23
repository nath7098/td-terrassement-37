export default defineNuxtPlugin(() => {
  const { googleSiteVerification } = useRuntimeConfig().public
  if (!googleSiteVerification) return

  useHead({
    meta: [{ name: 'google-site-verification', content: googleSiteVerification }]
  })
})
