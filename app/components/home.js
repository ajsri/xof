import React, { Component } from "react"
import LoadingIcon from "./util/loadingIcon"

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        <div className="container m-main-container">
          <div className="row">
            <div className="col-md-12">
              <h1>X.O.F.</h1>
              <h4>UI/UX Pattern Guide and React-Redux boilerplate</h4>
              <p>The purpose of this project is to try and provide a set of reusable, extensible components for 1904Labs projects.</p>
              <p>Roadmap at the moment is to create a custom version of Bootstrap, tearing out the things we don't need and hopefully incorporating some cool things.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home