import {
  SET_LOCALE
} from "./types";

export const setLocale = (lang) => async (dispatch) => {
  dispatch({
    type: SET_LOCALE,
    payload: { lang },
  });
};
