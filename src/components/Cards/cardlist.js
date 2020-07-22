import React, {Component} from 'react';
import SearchAndFilter from '../Search&Filter/Search&Filter';
import CardCountry from './Card';
import CardDetails from './CardDetails';
import { Card, Button, Icon } from 'semantic-ui-react';
import {
	Switch,
	Route,
	Link
  } from "react-router-dom";
import '../../App.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    countries: state.requestCountries.countries,

  }
}




class CardList extends Component {

	render() {
		const { countriesFiltered, countries } = this.props;
		const CardArray = countriesFiltered.map( (name,i) => {
			return <CardCountry 
				name={countriesFiltered[i].name}
				alphacode={countriesFiltered[i].alpha3Code}
				population={countriesFiltered[i].population}
				capital={countriesFiltered[i].capital}
				region={countriesFiltered[i].region}
				flag={countriesFiltered[i].flag}
				/>
		})
		return(
			
				<Switch>
					<Route exact path="/" component={CardGroup }/>
					  <Route path="/cardinfo"  component={CardInfo  } />
				</Switch>
						
		)	
			
		function CardGroup() {
			return(
				<div>
					
					<Card.Group size="medium" centered>
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
					<Link to={{pathname:`/`}} style={{padding: "3em 4em",}}>
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
	




	  
	  
}


export default connect(mapStateToProps)(CardList);