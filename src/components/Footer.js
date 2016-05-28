
import { default as React, Component } from 'react'

if (process.env.BROWSER) { require('styles/Footer.scss') }

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="address">
			        <h3>Adresse</h3>

			        <p className="metro">
			        	<img src="http://www.metroparisiphone.com/images/icon.png" width="20"/> Basilique de Saint-Denis
			        </p>
			        <p className="text">
			          125 rue Gabriel Péri<br/>
			          93200, Saint-Denis
			        </p>
			    </div>

			    <div className="phones">
			        <h3>Appelez-nous</h3>

			        <p className="phone">
			          Ilyès, <img src="/assets/phone-ilyes.png"/>
			        </p>
			        <p className="phone">
			          Guillaume, <img src="/assets/phone-guillaume.png"/>
			        </p>
			        
			        <p className="information">
			          On peut venir vous récupérer au métro ! 😉
			        </p>
			    </div>

			    <div className="filler"></div>
			</footer>
		);
	}
}

export default Footer