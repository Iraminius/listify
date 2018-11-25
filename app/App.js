import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'
import createHistory from 'history/createHashHistory'
import configureStore from './store/configureStore'
import Routes from './routes'

const history = createHistory()
const store = configureStore(history)

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  )
}

export default App
