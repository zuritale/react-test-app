import { createSelector } from '@reduxjs/toolkit';

import {
  SET_LOCALE
} from '../actions/types';

const initialState = {
  lang: 'en',
};

function localesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOCALE:
      return { ...state, lang: payload.lang};

    default:
      return state;
  }
};

export const getLocaleSelector = createSelector(
  state => state.locales,
  locales => locales.lang
);

export default localesReducer;