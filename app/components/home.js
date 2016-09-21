import React, { Component } from "react"

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className="container m-t-lg">
        <div className="row">
          <div className="col-md-12">
            <h2>X.O.F.</h2>
            <h4>UI/UX Pattern Guide and React-Redux boilerplate</h4>
            <p>The purpose of this project is to try and provide a set of reusable, extensible components for 1904Labs projects.</p>
            <p><small><em>Eventually...</em></small></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home