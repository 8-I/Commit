
import React, { Component } from 'react'

if (process.env.BROWSER) { require('styles/Space.scss') }

class Space extends Component {

  render () {

    const { thumbnail, picture } = this.props

    return (
      <div className='Space'>
        <img className='thumbnail' src={thumbnail} />
        <img className='profile' src={picture} />
      </div>
    )
  }
}

export default Space
