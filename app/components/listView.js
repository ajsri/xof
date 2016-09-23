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

  getMember(id){
    axios.get(`/members/${id}`)
      .then(response => {
        console.log(response.data)
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
                let { name, address, birthday } = member
                return(
                  <li key={member._id} onClick={(e) => this.getMember(member._id)}>
                    <p>{name.firstName + " " + name.lastName}</p>
                    <p>{address.number + " " + address.street}</p>
                    <p>{address.city + ", " + address.state + " " + address.zip}</p>
                    <p>Born: {`${birthday.month}/${birthday.day}/${birthday.year}`}</p>
                  </li>
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