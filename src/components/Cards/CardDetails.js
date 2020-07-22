import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Borders from './borders';




const CardDetails = ({country}) => {

    const BordersArray = country.borders.map(border => {
          return <Borders border={border}/> 
    
    })
    
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
                                <h2>{country.name}</h2>
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
                                <strong>Area:</strong> {Intl.NumberFormat("de-DE").format(country.area)} km2
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row divided columns={country.borders.length+2}>
                                <Grid.Column>
                                    <strong>Border:</strong>
                                </Grid.Column>
                                {BordersArray}             
                        </Grid.Row>
                    </Grid>    
                        
                </Grid.Column>   
                
            </Grid.Row>
        </Grid>
        
    )
}



export default CardDetails;