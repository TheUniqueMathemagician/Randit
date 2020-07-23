import VueI18n from 'vue-i18n'

import messages from 'src/i18n'

export default ({
  app,
  Vue
}) => {
  Vue.use(VueI18n)
  const languages = ['fr-FR', 'de-DE', 'en-US', 'jp-JP']
  app.i18n = new VueI18n({
    locale: languages.find((lang) => lang.toUpperCase().includes(navigator.language.toUpperCase())),
    fallbackLocale: 'en-US',
    messages
  })
}
