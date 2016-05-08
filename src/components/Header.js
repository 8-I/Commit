
import React, { Component } from 'react'

import Container from './Container'

if (process.env.BROWSER) { require('styles/Header.scss') }

class Header extends Component {

  render () {
  
    return (
      <Container>
        <div className='Header'>
          <a href='#' className='logo'>
            <span>Commit</span>
          </a>
        </div>
      </Container>
    )
  }
}

export default Header
