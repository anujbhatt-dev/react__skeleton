import React, {Component} from "react"
import {Switch , Route} from "react-router-dom"
//fixed
import GoToTop from "./fixed/gototop"
import Navigation from "./fixed/navigation"
import NavigationMob from "./fixed/navigationMob"


import Landing from "./landing/landing"
import About from "./about/about"
import Contact from "./contact/contact"



class Layout extends Component{

    state={
     mobile:false
    }


    componentDidMount=()=>{

      let width= Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if(width<=500){
        this.setState({
          mobile:true
        })
      }
    }

    render(){

      return (
          <div classname="layout">
              {this.state.mobile?<NavigationMob/>:<Navigation/>}
              <GoToTop/>
              <Switch>
                   <Route path='/' exact>
                       <Landing/>
                   </Route>
                   <Route path='/about' exact>
                       <About/>
                   </Route>
                   <Route path='/contact' exact>
                       <Contact/>
                   </Route>
              </Switch>
          </div>
      )
    }
}


 export default Layout;
