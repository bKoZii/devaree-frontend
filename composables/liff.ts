import liff from '@line/liff'
import { ref } from 'vue'

const { app } = useRuntimeConfig()

export const useLiff = (liffId = app.liffId) => {
  const error = ref(null)
  const liffInstance = ref<null | typeof liff>(null)
  liff
    .init({ liffId: liffId, withLoginOnExternalBrowser: true })
    .then(() => {
      liffInstance.value = liff
      error.value = null
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: window.location.href })
      }
    })
    .catch((err) => (error.value = err))

  return { liff: liffInstance, error }
}
