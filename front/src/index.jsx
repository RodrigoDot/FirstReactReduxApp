import React from 'react'
import ReactDOM from 'react-dom'

import {
  applyMiddleware,
  createStore
 } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

// Chrome devtools integration
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('app')
)
