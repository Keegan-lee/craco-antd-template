import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

const composeEnhancers = composeWithDevTools({
	realtime: true
});

const store = createStore(
	rootReducer(history),
	composeEnhancers(applyMiddleware(thunk))
);

export default store;