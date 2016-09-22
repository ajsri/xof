import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

/*
  Prop format: Array of objects with following keys
  name: Display name for link
  link: Where to link in app //TODO - external URLS
  dropdown: (OPTIONAL) Boolean if subitems exist
  items: (OPTIONAL) Array of objects with name, link (recursive dropdowns not supported)
 */

class Navigation extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <nav className="navbar navbar-dark bg-inverse navbar-static navbar-fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav navbar-nav xof-nav">
                <li className="navbar-brand">
                  <img src="./img/logo.png" alt="I love you Ducky Butt!!!" className="brand-logo"/>
                </li>
                {this.props.navItems.map((navItem, i) => {
                  return(
                    <li key={i} className="nav-item">
                      <Link to={navItem.link}
                         className={navItem.dropdown ? "dropdown-toggle" : "xof-nav-link"}
                         id={navItem.name}
                         data-toggle="dropdown"
                         aria-haspopup="true"
                         aria-expanded="false">
                          {navItem.name}
                      </Link>
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
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation