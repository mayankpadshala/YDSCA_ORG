import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const persistReducerVar = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistReducerVar,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// set up a store subscription listener
// to store the users token in localStorage

// prevent auth error on first run of subscription
//let currentState = { auth: { token: null } };
/**
store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  //let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
   
});
*/

export const persistor = persistStore(store);
