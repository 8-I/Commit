
import React, { Component } from 'react'

import Container from './Container'
import Space from './Space'

class Spaces extends Component {

  render () {

    const { items } = this.props

    return (
      <Container>
        <div className='Spaces'>
        {items.map((i, key) =>
            <Space picture={i.author.picture} thumbnail={i.thumbnail} key={key} />)}
        </div>
      </Container>
    )
  }
}

export default Spaces
