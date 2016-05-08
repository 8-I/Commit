
import React, { Component } from 'react'

if (process.env.BROWSER) { require('styles/Hero.scss') }

class Hero extends Component {

  render () {

    const { children } = this.props
  
    return (
      <div className='Hero'>
        <div className='background' />
        <div className='logo'>
          <img src='../assets/logo.png'/>
        </div>
      </div>
    )
  }
}

export default Hero
