import { connect } from "react-redux"
import { getTeamMembers } from "../actions/sample"

import About from "../components/about"

const mapDispatchToProps = (dispatch) => {
  return {
    getTeamMembers: () => {
      dispatch(getTeamMembers())
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    main: state.main
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)

