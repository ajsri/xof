import { combineReducers } from "redux"
import { syncHistoryWithStore, routerReducer } from "react-router-redux"

import { sample } from "./sample"

const main = (state = {}, action) => {
  switch(action.type){
    case "SAMPLE_ACTION":
      return Object.assign({}, state, {
        ranSampleAction: true
      })
    case "REQUEST_TEAM_MEMBERS":
      return Object.assign({}, state, {
        loadingTeam: true
      })
    case "RECEIVE_TEAM_MEMBERS":
      return Object.assign({}, state, {
        team: action.team,
        loadingTeam: false
      })
    default:
      return state
  }
}

const mainReducer = combineReducers({
  main,
  sample,
  routing: routerReducer
})

export default mainReducer