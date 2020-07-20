import React from 'react';
import SearchAndFilter from '../Search&Filter/Search&Filter';
import CardCountry from './Card';
import CardDetails from './CardDetails';
import { Card, Button, Icon } from 'semantic-ui-react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
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



	return(
		<Router>
			<Switch>
				<Route exact path="/" component={CardGroup }/>
          		<Route path="/cardinfo"  component={CardInfo } />
			</Switch>
		</Router>			
	)	
		
	function CardGroup() {
		return(
			<div>
				
				<Card.Group size="medium" >
						{CardArray}
					</Card.Group>
			</div>		
		)
	}



	function CardInfo(props) {
	const CardInfoFilter =	countries.filter(country => {
			return country.alpha3Code.includes(props.location.state.name)
		})
		return (
		  <div>
			    <Link to={{pathname:`/`}} style={{padding: "3em"}}>
			   		<Button animated basic>
						<Button.Content visible>Back</Button.Content>
						<Button.Content hidden basic>
							<Icon name='arrow left' />
						</Button.Content>
					</Button>
				</Link>
			<CardDetails country= { CardInfoFilter[0] }/>
		  </div>
		);
	  }	
	  
	  
}


export default CardList;