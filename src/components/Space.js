
import React, { Component } from 'react'
import classNames from 'classnames'

if (process.env.BROWSER) { require('styles/Space.scss') }

/** Person **/
const Person = ({ name, title, picture, time, timeShortVersion, expanded, onMouseEnter }) => (
	<a href="/lol" className={classNames('person', { expanded })} onMouseEnter={onMouseEnter}>
		<div className='picture'>
			<p className='time-short-version'>
				<i className='ion-checkmark-round'></i> {timeShortVersion}
			</p>
			<div className='img'>
				<img src={picture}/>
			</div>
		</div>
		<div className='details'>
			<div className='inner'>
				<span className='name'>{name}</span>
				<span className='title'>{title}</span>
				<span className='time'><i className='ion-checkmark-round'></i> {time}</span>
			</div>
		</div>
	</a>
)

/** People **/
class People extends Component {

  constructor (props) {

    super(props)
    this.rotate = this.rotate.bind(this)

    this.timer = null
    this.state = {
      detailledPersonIndex: 0,
    }
  }

  componentDidMount () {
    // this.timer = setInterval(this.rotate, 4000)
  }

  componentWillUnmount () {
    if (this.timer) { clearInterval(this.timer) }
  }

  rotate () {

    let newIndex = this.state.detailledPersonIndex

    if (this.state.detailledPersonIndex + 1 === this.props.people.length) {
      newIndex = 0
    } else {
      newIndex++
    }

    this.setState({
      detailledPersonIndex: newIndex,
    })
  }

  hovered (index) {
    this.setState({
      detailledPersonIndex: index,
    })
    if (this.timer) { clearInterval(this.timer) }
  }

  render () {
    const { people } = this.props

    return (
      <div className='people'>
        {people.map((person, i) => <Person {...person} expanded={i === this.state.detailledPersonIndex} onMouseEnter={this.hovered.bind(this, i)}/>)}
      </div>
    )
  }
}

/** Space **/
class Space extends Component {

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
      <div className='Space space-from-top'>
      <div className='pictures'>
        <div className="mask"></div>
        <img src='/assets/photo1.jpg'/>
        <img src='/assets/photo2.jpg'/>
        <img src='/assets/photo3.jpg'/>
      </div>

      <h1 className='padded-left'>☕☕💻☀️</h1>

      <h3>People who recently checked in</h3>
      <div className='padded-left'>
      <People people={this.state.people}/></div>

      <h3>Schedule</h3>

      <div className="schedule padded-left">
        <p className="text">
          Come work any day of the week, from 2 P.M. to 8 P.M.<br/>
          China tea provided !
        </p>
        <p className="currentStatus">
          Open right now until 8 P.M.
        </p>
      </div>

      <h3>Upcoming events</h3>

      <div className="events padded-left">
        <div className="event">
          <p className="title">Brainstorming session</p>
          <p className="when">Wednesday from 3 P.M. to no time</p>
        </div>
        <div className="event">
          <p className="title">Project Speed dating</p>
          <p className="when">Friday from 8 P.M. to 10 P.M.</p>
        </div>
      </div>
      </div>
    )
  }
}

export default Space
