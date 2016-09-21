import React, { Component, PropTypes } from "react"

class Navigation extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return(
      <nav className="navbar navbar-dark bg-inverse">
        <ul className="nav navbar-nav">
          {this.props.navItems.map((navItem, i) => {
            return(
              <li key={i} className="nav-item">
                <a className={navItem.dropdown ? "dropdown-toggle" : ""}
                   id={navItem.name}
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false">
                    {navItem.name}
                </a>
                {navItem.dropdown &&
                  <div className="dropdown-menu" aria-labelledby={navItem.name}>
                    {navItem.items.map((subItem, i) => {
                      return(
                        <a className="dropdown-item" key={i}>{subItem.name}</a>
                      )
                    })}
                  </div>
                }
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navigation