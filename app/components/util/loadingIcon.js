import React, { Component } from "react"

class LoadingIcon extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <span className="spin material-icons">cached</span>
    )
  }
}

export default LoadingIcon