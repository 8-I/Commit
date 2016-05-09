
import React, { Component } from 'react'

if (process.env.BROWSER) { require('styles/Tile.scss') }

import Container from './Container'

class Tile extends Component {

  render () {

    const { title, children } = this.props

    return (
      <Container>
        <div className='Tile'>
          <h3>{title}</h3>
          <div className='children'>
            {children}
          </div>
        </div>
      </Container>
    )
  }
}

export default Tile
