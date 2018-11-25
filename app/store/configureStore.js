import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router/immutable'
import createRootReducer from './reducers'
import rootSaga from './sagas'
import { fromJS } from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(history) {
  const rootReducer = createRootReducer(history)

  const initialState = fromJS({})

  const sagaMiddleware = createSagaMiddleware()
  const storeEnhancers = composeWithDevTools(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )

  const store = createStore(rootReducer, initialState, storeEnhancers)

  sagaMiddleware.run(rootSaga)

  return store
}
