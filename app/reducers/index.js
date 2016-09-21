import { combineReducers } from "redux"
import { syncHistoryWithStore, routerReducer } from "react-router-redux"


const main = (state = null, action) => {
  switch(action.type){
    case "SAMPLE_ACTION":
      return Object.assign({}, state, {
        ranSampleAction: true
      })
    default:
      return state
  }
}

const mainReducer = combineReducers({
  main,
  routing: routerReducer
})

export default mainReducer