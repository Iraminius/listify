import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'
import user from './user'

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    user: user,
  })
}
