import React, { Component } from "react"
import LoadingIcon from "./util/loadingIcon"

class About extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if(!this.props.main.team){
      this.props.getTeamMembers()
    }
  }
  render(){
    console.log(this.props)
    return(
      <div className="container m-main-container">
        <div className="row">
          <div className="col-md-12">
            <p>Placeholder for actual About page</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Team Members</h3>
            <ul className="clean">
              {this.props.main.loadingTeam &&
                <li><LoadingIcon /></li>
              }
              {this.props.main.team && this.props.main.team.map((member, i) => {
                return(
                  <li key={i}>{member.name}</li>
                )
              })}
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Company</h3>
            <p>1904Labs bio will go here</p>
          </div>
          <div className="col-md-4">
            <h3>Influences</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default About