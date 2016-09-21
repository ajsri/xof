import React, { Component } from "react"
import ReactDOM from "react-dom"

import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import thunk from "redux-thunk"
import promise from "redux-promise"
import createLogger from "redux-logger"

import { Router, Route, hashHistory, Link } from "react-router"

import mainReducer from "./reducers"

import MainApp from "./containers/Main"

import "./styles/xof.scss"

const logger = createLogger()
const store = createStore(mainReducer, applyMiddleware(thunk, promise, logger))

ReactDOM.render(<Provider store={store}>
                  <Router history={hashHistory}>
                    <Route path="/" component={MainApp} />
                  </Router>
                </Provider>, document.getElementById("xof"));