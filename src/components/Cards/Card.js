import React from 'react';
import { Card,  Image } from 'semantic-ui-react'


const CardCountry = ({name, population, capital, region, flag, alphacode}) => {
    return (
        <Card style={{margin: "3em"}}href="#">
		   <Image src={flag} style={{width: "100%", height: "45%"}}   />
		    <Card.Content style={{gripgap: "10px",gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
		      <Card.Header  >{name}</Card.Header>
		      <Card.Meta>
		        <span className='date'>{alphacode}</span>
		      </Card.Meta>
		      <Card.Description>
		        <strong>Population:</strong> {population}
		      </Card.Description>
              <Card.Description>
                  <strong>Region:</strong> {region}
              </Card.Description>
              <Card.Description>
                 <strong>Capital:</strong> {capital}
              </Card.Description>
		    </Card.Content>
  		</Card>
    )
}


export default CardCountry;