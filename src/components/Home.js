import React, { Component } from 'react'

import Header from './Header'
import Hero from './Hero'
import Space from './Space'
import People from './People'
import Footer from './Footer'

if (process.env.BROWSER) { require('styles/Home.scss') }

class Home extends Component {

  constructor (props) {
    super(props)

    this.state = {
      people: [
        { name: 'Guillaume Badi', title: 'Young Creative Builder', picture: '/assets/person1.jpg', time: 'Yesterday 5:00 PM', timeShortVersion: '5:00 PM' },
        { name: 'Ilyes Hermellin', title: 'No one', picture: '/assets/person2.jpg', time: 'Today 2:21 PM', timeShortVersion: '2:21 PM' },
      ],
    }
  }

  render () {
    return (
      <div>
      	<Header/>

		<div className="section wrapped">
			<h3>Projets actuels</h3>
			<div className="projects">
				<a href="https://github.com/8-I/Voyager" className="project voyager" title="Voir sur Github" target="_blank">
					<h4>Voyager</h4>
					<p className="presentation">
						Navigateur next-gen
					</p>
				</a>
			</div>
		</div>
		
		{/*<div className="section wrapped" style={{overflow: 'hidden'}}>
			<h3>Nous</h3>
			<People people={this.state.people}/>
		</div>*/}

      	<div className="section wrapped">
			<Space/>
			<Footer/>
		</div>


   	  </div>
    )
  }

}

export default Home
