import React, { Component } from "react"
import SampleRestCall from "./sampleRestCall"
import LoadingIcon from "./util/loadingIcon"
import Slider from "./forms/slider"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null
    }
  }

  sampleRestCall(){
    $("#modal").modal("show")
    this.props.sampleRestCall(this.state.name)
  }

  render(){
    return (
      <div>
        <div className="container m-main-container">
          <div className="row">
            <div className="col-md-12">
              <h1>X.O.F.</h1>
              <h4>Pattern/Style Guide and React-Redux Boilerplate</h4>
              <p>The purpose of this project is to try and provide a set of reusable, extensible components for 1904Labs projects.</p>
              <p>Roadmap at the moment is to create a custom version of <a href="http://www.getbootstrap.com">Bootstrap</a>, tearing out the things we don't need and hopefully incorporating some cool things.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 onClick={() => this.showModal()}>Upcoming Features</h4>
              <ul>
                <li>Additional grid options using flex and fallback</li>
                <li>Brand guidelines and style guide</li>
                <li>Patterns for reusable components</li>
                <li>Sample pages</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <SampleRestCall actionSent={false}
                              disabled={!this.state.name}
                              sendSampleAction={this.sampleRestCall.bind(this)}/>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-block">
                  <div className="card-title">
                    <label htmlFor="name-input">Name</label>
                    <input type="text"
                           id="name-input"
                           className="form-control"
                           onChange={(e) => this.setState({name: e.target. value})}/>
                    {this.state.name &&
                    <p>Hi {this.state.name}, welcome to the X.O.F. homepage! Try clicking that button to the left!</p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="modal" className="modal fade">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {this.props.sample.loadingRestCall &&
                  <LoadingIcon />
                }
                {this.props.sample && this.props.sample.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home