import { connect } from "react-redux"
import ListView from "../components/listView"

const mapStateToProps = (state, ownProps) => {
  return {
    main: state.main
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView)