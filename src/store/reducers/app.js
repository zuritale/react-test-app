import { createSelector } from '@reduxjs/toolkit';

import {
  COMPLETE_TUTORIAL,
  SET_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  loading: false,
  error: '',
  showTutorial: true,
};

function loadingReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {...state, loading: payload};

    case SET_ERROR:
      return {...state, error: payload};

    case COMPLETE_TUTORIAL:
      return {...state, showTutorial: false};

    default:
      return state;
  }
};

export const getLoadingSelector = createSelector(
  state => state.app,
  app => app.loading
);

export const getErrorSelector = createSelector(
  state => state.app,
  app => app.error
);

export const getShowTutorialSelector = createSelector(
  state => state.app,
  app => app.showTutorial
);

export default loadingReducer;