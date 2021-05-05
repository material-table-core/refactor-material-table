import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import state from './state';
import { rootReducer } from './reducers';

export function initStore() {
  return createStore(rootReducer, state, composeWithDevTools());
}
