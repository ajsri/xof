import React, { Component } from "react"
import ReactDOM from "react-dom"

import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import thunk from "redux-thunk"
import promise from "redux-promise"
import createLogger from "redux-logger"

import { Router, Route, hashHistory, Link, IndexRoute } from "react-router"

import mainReducer from "./reducers"

import MainApp from "./containers/Main"
import Home from "./containers/home"
import About from "./components/about"

import "./styles/xof.scss"

const logger = createLogger()
const store = createStore(mainReducer, applyMiddleware(thunk, promise, logger))

ReactDOM.render(<Provider store={store}>
                  <Router history={hashHistory}>
                    <Route path="/" component={MainApp}>
                      <IndexRoute component={Home} />
                      <Route path="/about" component={About} />
                    </Route>
                  </Router>
                </Provider>, document.getElementById("xof"));