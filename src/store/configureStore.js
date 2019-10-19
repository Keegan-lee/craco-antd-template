import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore() {
  // Define initial state
  const initialState = {};

  // Construct enhancer
  const enhancer = compose(
    applyMiddleware(thunk)
  );

  return createStore(rootReducer, initialState, enhancer);
}
