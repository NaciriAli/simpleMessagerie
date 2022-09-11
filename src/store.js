import { messageReducer } from './reducers/messageReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(messageReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store