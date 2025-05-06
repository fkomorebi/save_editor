import type {App} from "vue";
import {createPinia} from "pinia";
import router from "@/router";
import { createI18n } from 'vue-i18n'
import zh from '@/locale/zh'
export default (app: App<Element>)=>{
  app.use(createPinia())
  app.use(router)

  const i18n = createI18n({
    locale: 'zh', // set locale
    messages: {
      zh,
    }
  })
  app.use(i18n)
}
