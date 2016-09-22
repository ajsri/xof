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
          <p className="card-text">Enter a name to the right and click the button below!</p>
          <button type="button"
                  disabled={this.props.disabled}
                  onClick={() => this.props.sendSampleAction()}
                  className="btn btn-primary">
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default SampleRestCall