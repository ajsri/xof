import React, { Component } from "react"

class About extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container m-main-container">
        <div className="row">
          <div className="col-md-12">
            <p>Placeholder for actual About page</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Team Members</h3>
            <ul>
              <li>A.J. Srivastava</li>
              <li>Alex Raines</li>
              <li>Marc Brooks</li>
              <li>Josh Fischer</li>
              <li>Carol Righi</li>
              <li>John Royle</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Company</h3>
            <p>1904Labs bio will go here</p>
          </div>
          <div className="col-md-4">
            <h3>Influences</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default About