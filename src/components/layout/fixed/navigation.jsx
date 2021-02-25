import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class Navigation extends Component{

    render(){

      return (
           <div className="navigation">

               <div className="navigation__brandLogo">
                    <img src="{logo}" alt=""/>
               </div>
               <div className="navigation__items">
                   <NavLink activeStyle={{color:"white",background:"yellow"}} exact to="/" className="navigation__items_item navigation__items_item">Home</NavLink>
                   <NavLink activeStyle={{color:"white",background:"yellow"}} exact to="/about" className="navigation__items_item navigation__items_item">About</NavLink>
                   <NavLink activeStyle={{color:"white",background:"yellow"}} exact to="/contact" className="navigation__items_item navigation__items_item">Reach</NavLink>
               </div>
           </div>
      )
    }
}

export default Navigation;
