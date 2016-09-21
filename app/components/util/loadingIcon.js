import React, { Component } from "react"

class LoadingIcon extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <span className="spin inline">loading</span>
    )
  }
}

export default LoadingIcon