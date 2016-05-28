
import React, { Component } from 'react'

import Container from './Container'

if (process.env.BROWSER) { require('styles/Header.scss') }

class Header extends Component {

  render () {

    return (
      <header>
        <div className="wrapped">
          <h1>Commit</h1>
          <p className="presentation">
            Venez créer avec nous.
          </p>

          <div className="people">
            <a href="https://github.com/GuillaumeBadi" className="person" target="_blank">
              <img src="/assets/person1.jpg"/>
            </a>
            <a href="https://github.com/yachaka" className="person" target="_blank">
              <img src="/assets/person2.jpg"/>
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
