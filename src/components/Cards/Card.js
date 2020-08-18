import React from 'react';
import { Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const CardCountry = ({name, population, capital, region, flag, alphacode}) => {
    return (
			<Card style={{margin: "3em"}}>
				<Link to={{pathname:`/cardinfo/${alphacode}`, state:{"name": alphacode }}} style={{color: "black", width: "100%", height: "100%"}}  >
					<div style={{borderRadius: '0.28571429rem 0.28571429rem 0 0', width: "100%", height: "150px", backgroundImage: `url(${flag})`, backgroundSize: 'cover', backgroundPosition: 'center'}}  alt={`${name} flag`} />
					<Card.Content style={{gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", padding: "1em 2em" }}>
						<Card.Header><h3>{name}</h3></Card.Header>
						<Card.Meta>
							<span className='date'>{alphacode}</span>
						</Card.Meta>
						<Card.Description>
							<strong>Population:</strong> {Intl.NumberFormat("de-DE").format(population)}
						</Card.Description>
						<Card.Description>
							<strong>Region:</strong> {region}
						</Card.Description>
						<Card.Description>
							<strong>Capital:</strong> {capital}
						</Card.Description>
					</Card.Content>
				</Link>
			</Card>				
				

			


    )
}


export default CardCountry;