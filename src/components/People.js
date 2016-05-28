
import React, { Component } from 'react'
import classNames from 'classnames'

if (process.env.BROWSER) { require('styles/People.scss') }

/** Person **/
const Person = ({ name, title, picture, time, timeShortVersion, expanded, onMouseEnter }) => (
	<a href='/lol' className={classNames('person', { expanded })} onMouseEnter={onMouseEnter}>
		<div className='picture'>
			{/*<p className='time-short-version'>
				<i className='ion-checkmark-round'></i> {timeShortVersion}
			</p>*/}
			<div className='img'>
				<img src={picture}/>
			</div>
		</div>
		<div className='details'>
			<div className='inner'>
				<span className='name'>{name}</span>
				<span className='title'>{title}</span>
				{/*<span className='time'><i className='ion-checkmark-round'></i> {time}</span>*/}
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

export default People