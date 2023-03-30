import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import enUS from './en-US'
import faIR from './fa-IR'

import { useAppStoreWithOut } from '@/store/modules/app'
import type { Language } from '@/store/modules/app/helper'

const appStore = useAppStoreWithOut()

const defaultLocale = appStore.language || 'zh-CN'

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'fa-IR',
  allowComposition: true,
  messages: {
    'en-US': enUS,
    'fa-IR': faIR,
  },
})

export const t = i18n.global.t

export function setLocale(locale: Language) {
  i18n.global.locale = locale
}

export function setupI18n(app: App) {
  app.use(i18n)
}

export default i18n
