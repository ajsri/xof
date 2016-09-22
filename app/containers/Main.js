import { connect } from "react-redux"
import Main from "../components/main"

import { sampleAction, sampleRestCall } from "../actions/sample"

const mapDispatchToProps = (dispatch) => {
  return {
    sampleAction: () => {
      dispatch(sampleAction())
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    main: state.main
  }
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainApp