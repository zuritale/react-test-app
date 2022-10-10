import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import spanishMessages from '../constants/locales/es-ES.json';
import englishMessages from '../constants/locales/en-US.json';

const messagesSwitch = {
  es: spanishMessages,
  en: englishMessages
}

function mapStateToProps(state) {
  const { lang } = state.locales;

  const messages = messagesSwitch[lang];

  return { locale: lang, messages };
}

export default connect(mapStateToProps)(IntlProvider);