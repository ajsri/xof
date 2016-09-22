export const sample = (state = {}, action) => {
  switch(action.type) {
    case "REQUEST_SAMPLE_REST_CALL":
      return Object.assign({}, state, {
        loadingRestCall: true
      })
    case "SAMPLE_REST_CALL_SUCCESS":
      return Object.assign({}, state, {
        loadingRestCall: false,
        message: action.message
      })
    default:
      return state
  }
}