import React, { Component } from "react"

class SampleRestCall extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Sample REST Call</h4>
          <p className="card-text">Press the button below and see if anything happens.</p>
          <a href="#"
             onClick={() => this.props.sendSampleAction("AJ")}
             className="btn btn-primary">
            {!this.props.actionSent ? "Do something(?)" : "I can't believe you took orders from a button"}
          </a>
        </div>
      </div>
    )
  }
}

export default SampleRestCall