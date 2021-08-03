import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
//Store is receiving all the reducers
export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)