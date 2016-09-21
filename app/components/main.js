import React, { Component } from "react"

class Main extends Component{
  constructor(props){
    super(props)
    this.navItems = [
      {name: "X.O.F.", link: null},
      {name: "Usage", link: "usage"},
      {name: "Dependencies", link: "dependencies"},
    ]
  }

  componentDidMount(){
    this.props.sampleAction()
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>X.O.F.</h2>
            <h4>UI/UX Pattern Guide and React-Redux boilerplate</h4>
            <p>The purpose of this project is to try and provide a set of reusable, extensible components for 1904Labs projects.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Main