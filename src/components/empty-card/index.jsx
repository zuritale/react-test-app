import React from 'react';
import { useIntl } from 'react-intl';

import messages from '../../utils/constants/locales/messages';

const EmptyCard = () => {
  const t = useIntl()
  return (
    <div className="card p-2 h-100 w-100">
      <div
        className="card-body d-flex flex-column justify-content-center align-items-center text-align-center"
      >
        <img className="empty-banner-img" src="images/kite-blue.png" alt="kite with clouds" />
        <h5 className="text-secondary text-center mt-4">{t.formatMessage(messages.emptyTitle)}</h5>
        <p className="text-muted" >{t.formatMessage(messages.emptySubtitle)}</p>
      </div>
    </div>
  )
};

export default EmptyCard;