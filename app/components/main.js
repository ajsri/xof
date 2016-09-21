import React, { Component } from "react"

class Main extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.sampleAction()
  }

  render(){
    return(
      <div>xof redux</div>
    )
  }
}

export default Main