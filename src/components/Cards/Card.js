import React from 'react';
import { Card,  Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const CardCountry = ({name, population, capital, region, flag, alphacode}) => {
    return (
			<Card style={{margin: "3em"}}>
				<Link to={{pathname:`/cardinfo/${alphacode}`, state:{"name": alphacode }}} style={{color: "black", width: "100%", height: "100%"}}  >
					<Image src={flag} style={{width: "100%", height: "45%"}}   />
					<Card.Content style={{gripgap: "10px",gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", padding: "1em" }}>
						<Card.Header  >{name}</Card.Header>
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