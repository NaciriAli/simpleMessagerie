import { messageReducer } from './reducers/messageReducer';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const store = createStore(messageReducer, applyMiddleware(thunk))

export default store