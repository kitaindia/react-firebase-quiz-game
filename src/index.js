import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import routes from './routes'
import reducers from './reducers'
import { CookiesProvider } from 'react-cookie';

const logger = createLogger()
const store = createStore(reducers, {}, applyMiddleware(thunk, logger))
const history = syncHistoryWithStore(browserHistory, store)

render(
    <CookiesProvider>
        <Provider store={store}>
            <Router history={history} routes={routes}/>
        </Provider>
    </CookiesProvider>,
    document.getElementById('root')
)
