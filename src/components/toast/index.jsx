import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { setError } from '../../store/actions/app';
import { getErrorSelector } from '../../store/reducers/app';
import messages from '../../utils/constants/locales/messages';

const Toast = () => {
  const t = useIntl();
  const dispatch = useDispatch();
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    if (error) {
      toast.error(t.formatMessage(messages[error]), {
        duration: 3000,
      });
      dispatch(setError(''));
    }
  }, [error]);

  return (
    <Toaster
      position="bottom-right"
      reverseOrder={true}
    />
  );
}

export default Toast;
