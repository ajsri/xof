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