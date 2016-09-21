import React, { Component } from "react"
import SampleRestCall from "./sampleRestCall"

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    console.log(this.props)
    return (
      <div>
        <div className="container m-main-container">
          <div className="row">
            <div className="col-md-12">
              <h1>X.O.F.</h1>
              <h4>Pattern/Style Guide and React-Redux Boilerplate</h4>
              <p>The purpose of this project is to try and provide a set of reusable, extensible components for 1904Labs projects.</p>
              <p>Roadmap at the moment is to create a custom version of <a href="http://www.getbootstrap.com">Bootstrap</a>, tearing out the things we don't need and hopefully incorporating some cool things.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4>Upcoming Features</h4>
              <ul>
                <li>Additional grid options using flex and fallback</li>
                <li>Brand guidelines and style guide</li>
                <li>Patterns for reusable components</li>
                <li>Sample pages</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <SampleRestCall actionSent={false}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home