import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const CardCountry = ({name, population, capital, region, flag, alphacode}) => {
    return (
        <Card style={{margin: "3em"}}>
		    <Image src={flag} fluid   />
		    <Card.Content>
		      <Card.Header  >{name}</Card.Header>
		      <Card.Meta>
		        <span className='date'>{alphacode}</span>
		      </Card.Meta>
		      <Card.Description>
		        Population {population}
		      </Card.Description>
              <Card.Description>
                  Region {region}
              </Card.Description>
              <Card.Description>
                  Capital {capital}
              </Card.Description>
		    </Card.Content>
  		</Card>
    )
}


export default CardCountry;