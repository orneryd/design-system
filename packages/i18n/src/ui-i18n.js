import {registerComponent} from '@ornery/ui-core'
import { I18n, I18nMessage, ContextBinding } from '@ornery/web-components';
import commonStrings from './common-strings.json'

const language = navigator.language || 'en-US'  // language without region code
const activeMessages = I18n.getMessages()
const activeLanguage = activeMessages[language] ? language : 'en-US'

I18n.setLang(activeLanguage)

I18n.addMessages('en-US', commonStrings)

registerComponent('ui-i18n', ContextBinding(I18nMessage));

export default I18n