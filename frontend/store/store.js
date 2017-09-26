import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';

const middlewares = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//   middlewares.unshift(createLogger());
// }

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
    applyMiddleware(...middlewares))
  )
);

export default configureStore;