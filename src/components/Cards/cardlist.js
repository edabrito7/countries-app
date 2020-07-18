import React from 'react';
import CardCountry from './Card';
import { Card } from 'semantic-ui-react'
import '../../App.css';

const CardList = ({countries}) => {
	const CardArray = countries.map( (name,i) => {
		return <CardCountry 
			name={countries[i].name}
			alphacode={countries[i].alpha3Code}
			population={countries[i].population}
			capital={countries[i].capital}
			region={countries[i].region}
			flag={countries[i].flag}
			/>
	})



	return (
		<Card.Group size="medium" >
			{CardArray}
		</Card.Group>
				
			
			
		
		
		)
}


export default CardList;