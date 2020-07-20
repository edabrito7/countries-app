import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
    Link,
    Redirect
  } from "react-router-dom";




const CardDetails = ({country}) => {
    
    return(
        <Grid style={{padding: "3em"}} stackable>
            <Grid.Row >
                <Grid.Column width={6}>
                    <Image src={country.flag}/>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <h1>{country.name}</h1>
                            </Grid.Column>
                            
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <strong>Native Name:</strong> {country.nativeName}
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <strong>Top Level Domain:</strong> {country.topLevelDomain}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <strong>Population:</strong> {Intl.NumberFormat("de-DE").format(country.population)}
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <strong>Currencies:</strong> {country.currencies[0].name}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <strong>Region:</strong> {country.region}
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <strong>Languages:</strong> {country.languages[0].name} , {country.languages[0].nativeName}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <strong>Sub Region:</strong> {country.subregion}
                            </Grid.Column>
                            <Grid.Column width={8} style={{wordWrap: "break-word"}}>
                                <strong>Time Zones:</strong> {country.timezones}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <strong>Capital:</strong> {country.capital}
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <strong>Area:</strong> {country.area}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row divided columns={country.borders.length}>
                            <Grid.Column >
                                <Link to={{pathname:`/cardinfo/${country.borders[0]}`, state:{"name": country.borders[0] }}} style={{color: "black"}}>
                                <strong>Border:</strong> {country.borders[0]}
                                </Link>        
                            </Grid.Column>
                            <Grid.Column >
                                <strong>Area:</strong> {country.area}
                            </Grid.Column>
                            <Grid.Column >
                                <strong>Area:</strong> {country.area}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>    
                        
                </Grid.Column>   
                
            </Grid.Row>
        </Grid>
        
    )
}



export default CardDetails;