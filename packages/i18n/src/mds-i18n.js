import { I18n, I18nMessage, ContextBinding } from '@mcklabs/web-components';
import commonStrings from './common-strings.json'

const language = navigator.language || 'en-US'  // language without region code
const activeMessages = I18n.getMessages()
const activeLanguage = activeMessages[language] ? language : 'en-US'

I18n.setLang(activeLanguage)

I18n.addMessages('en-US', commonStrings)

customElements.define('mds-i18n', ContextBinding(I18nMessage));

export default I18n