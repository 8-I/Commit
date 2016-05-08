
import React, { Component } from 'react'

if (process.env.BROWSER) { require('styles/Container.scss') }

class Container extends Component {

  render () {
    
    return (
      <div className='Container'>
        {this.props.children}
      </div>
    )
  }
}

export default Container
