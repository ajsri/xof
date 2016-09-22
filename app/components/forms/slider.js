import React, { Component } from "react"

class Slider extends Component{
  constructor(props){
    super(props)
    this._id = "slider-" + Math.floor(Math.random() * 100)
  }

  render(){
    console.log(this._id);
    return(
      <div>
        <label htmlFor={this._id}>{this.props.label}</label>
        <input className="form-control"
               type="range"
               min={this.props.min}
               max={this.props.max}
               id={this._id}/>
      </div>
    )
  }
}

export default Slider