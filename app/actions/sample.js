import axios from "axios"

export const sampleAction = () => {
  return {
    type: "SAMPLE_ACTION"
  }
}

export const sampleActionThunk = () => {
  return dispatch => {
    dispatch({
      type: "SAMPLE_ACTION"
    })
  }
}

export const sampleRestCall = (name) => {
  return dispatch  => {
    dispatch({
      type: "REQUEST_SAMPLE_REST_CALL"
    })
    axios.post("/test", {name})
      .then((response) => {
        dispatch({
          type: "SAMPLE_REST_CALL_SUCCESS",
          message: response.data.response
        })
      })
      .catch((error) => {
        dispatch({
          type: "SAMPLE_REST_CALL_ERROR"
        })
      })
  }
}