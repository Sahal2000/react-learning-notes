import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export default class Conditional_Rendering extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn : false
  }
}

  render() {
    const {isLoggedIn} = this.state
    let element = isLoggedIn ? <HomePage/> : <LoginPage/>;

    // if(isLoggedIn) {
    //     element = <HomePage/>
    // } else {
    //     element = <LoginPage/>
    // }
    return(
        <duv>
            {/* {element} */}
            {/* using short circuit */}
            {isLoggedIn && <HomePage/>}
        </duv>
    )
  }
}
