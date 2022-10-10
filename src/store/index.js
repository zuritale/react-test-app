import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return initialState;
  }
}

const store = configureStore(
  { reducer: rootReducer, preloadedState: loadFromLocalStorage() },
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

store.subscribe(() => saveToLocalStorage(store.getState()));

