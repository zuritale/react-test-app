import {
  SET_ERROR,
  SET_LOADING,
  COMPLETE_TUTORIAL
} from './types';

export const setLoading = (isLoading) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: isLoading,
  });
};

export const setError = (errorMessage) => (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: errorMessage,
  });
};

export const completeTutorial = () => (dispatch) => {
    dispatch({
      type: COMPLETE_TUTORIAL,
    });
  };
