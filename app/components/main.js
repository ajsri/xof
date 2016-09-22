import React, { Component } from "react"

import Navigation from "./navigation"
import Footer from "./footer"

class Main extends Component{
  constructor(props){
    super(props)
    this.navItems = [
      {name: "X.O.F.", link: null},
      {name: "Getting Started", link: "/"},
      {name: "Patterns", link: "#"},
      {name: "About", link: "about"}
    ]
  }

  componentDidMount(){
    //this.props.sampleAction()
  }

  render(){
    return(
      <div>
        <Navigation navItems={this.navItems} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Main