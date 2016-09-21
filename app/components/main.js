import React, { Component } from "react"

import Navigation from "./navigation"

class Main extends Component{
  constructor(props){
    super(props)
    this.navItems = [
      {name: "X.O.F.", link: null},
      {name: "Usage", link: "usage", dropdown: true, items: [
        {name: "dropdown one", link: "wew"},
        {name: "dropdown two", link: "lad"},
      ]},
      {name: "Dependencies", link: "dependencies"},
    ]
  }

  componentDidMount(){
    this.props.sampleAction()
  }

  render(){
    return(
      <div>
        <Navigation navItems={this.navItems} />
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
      </div>
    )
  }
}

export default Main