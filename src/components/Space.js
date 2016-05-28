
import React, { Component } from 'react'
import classNames from 'classnames'

if (process.env.BROWSER) { require('styles/Space.scss') }

/** Space **/
class Space extends Component {
  render () {

    let d = new Date()
    let isOpen = d.getDay() === 5 || d.getDay() === 6 ? true : false

    return (
      <div className='Space'>
      <div className='pictures'>
        <div className='mask'></div>
        <img src='/assets/photo1.jpg'/>
        <img src='/assets/photo2.jpg'/>
        <img src='/assets/photo3.jpg'/>
      </div>

      <h1 className='padded-left'>☕☕💻☀️</h1>

      <h3>Planning</h3>

      <div className='schedule padded-left'>
        <p className='text'>
          Nous façonnons le futur tous les samedi et dimanche, à partir de 10h du matin.
        </p>
        <p className={classNames('currentStatus', {open: isOpen})}>
          {isOpen ? 'Ouvert aujourd\'hui. Appelez-nous ou passez directement !' : 'Fermé aujourd\'hui'}
        </p>
      </div>

      {/*<h3>Upcoming events</h3>

      <div className='events padded-left'>
        <div className='event'>
          <p className='title'>Brainstorming session</p>
          <p className='when'>Wednesday from 3 P.M. to no time</p>
        </div>
        <div className='event'>
          <p className='title'>Project Speed dating</p>
          <p className='when'>Friday from 8 P.M. to 10 P.M.</p>
        </div>
      </div>*/}
      
      </div>
    )
  }
}

export default Space
