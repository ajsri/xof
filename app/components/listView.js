import React, { Component } from "react"
import axios from "axios"

class ListView extends Component {
  constructor(props){
    super(props)
    this.state = {
      members: []
    }
  }
  componentDidMount(){
    axios.get("/members")
      .then(response => {
        this.setState({members: response.data})
      })
  }
  render(){
    return(
      <div>
        <div className="container m-main-container">
          <div className="row">
            <div className="col-md-12">
              <ul>
              {this.state.members.map((member, i ) => {
                return(
                  <li key={member._id}>{member.name.firstName + " " + member.name.lastName}</li>
                )
              })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListView