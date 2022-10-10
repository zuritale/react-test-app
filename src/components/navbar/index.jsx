import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { setLocale } from '../../store/actions/locales';
import { getLocaleSelector } from '../../store/reducers/locales';
import { localeItems } from '../../utils/constants/locales';
import messages from '../../utils/constants/locales/messages';

const Navbar = () => {
  const t = useIntl();

  const lang = useSelector(getLocaleSelector);

  const dispatch = useDispatch();

  const selectLocale = (locale) => {
    dispatch(setLocale(locale));
  }

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <h2 className="navbar-brand mb-0">{t.formatMessage(messages.title)}</h2>
        <button
          className="btn btn-outline-light weather-gradient-hover d-flex ms-auto border-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#tutorial-modal"
          id="tutorial-modal-toggle"
        >
          <i className="fas fa-circle-info text-light fs-4" />
        </button>
        <div className="dropdown">
          <button
            className="btn btn-outline-light d-flex weather-gradient-hover text-light border-0"
            type="button"
            id="languageSelectionDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={`https://hatscripts.github.io/circle-flags/flags/${localeItems[lang].icon}.svg`}
              width="22"
              alt={`flag icon selected`}
            />
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageSelectionDropdown">
            {Object.values(localeItems).map((localeItem, index) => (
              <li key={`locales-option-${index}-${Math.random()}`} >
                <button
                  type="button"
                  className={`dropdown-item ${localeItem.value === lang ? 'active' : ''}`}
                  onClick={() => selectLocale(localeItem.value)}
                >
                  <img
                    src={`https://hatscripts.github.io/circle-flags/flags/${localeItem.icon}.svg`}
                    width="22"
                    alt={`flag icon ${localeItem.icon}`}
                    className="me-2"
                  />
                  {t.formatMessage(messages[localeItem.label])}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
