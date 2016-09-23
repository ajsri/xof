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
        setTimeout(() => {
          dispatch({
            type: "SAMPLE_REST_CALL_SUCCESS",
            message: response.data.response
          })
        }, 5000)

      })
      .catch((error) => {
        dispatch({
          type: "SAMPLE_REST_CALL_ERROR"
        })
      })
  }
}

export const getTeamMembers = () => {
  return dispatch => {
    dispatch({
      type: "REQUEST_TEAM_MEMBERS"
    })
    axios.get("/users")
      .then((response) => {
        setTimeout(() => {
          dispatch({
            type: "RECEIVE_TEAM_MEMBERS",
            team: response.data
          })
        }, 3000)
      })
      .catch((error) => {
        dispatch({
          type: "TEAM_MEMBERS_ERROR",
          error: error.data
        })
      })
  }
}