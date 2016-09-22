import { connect } from "react-redux"
import Home from "../components/home"
import { sampleRestCall } from "../actions/sample"

const mapStateToProps = (state, ownProps) => {
  return {
    main: state.main,
    sample: state.sample
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sampleRestCall: (name) => {
      dispatch(sampleRestCall(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)