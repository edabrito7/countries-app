import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Navbar from './components/navigation/navbar';
import SearchAndFilter from './components/Search&Filter/Search&Filter'
import CardList from './components/Cards/cardlist';
import { Image, Segment } from 'semantic-ui-react'
import './App.css';
import { setSearchField, requestCountries, regionCountries } from './actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchCountries.searchField,
    countries: state.requestCountries.countries,
    isPending: state.requestCountries.isPending,
    error: state.requestCountries.error,
    region: state.regionCountries.region,
  }
}

const madDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCountries: () => dispatch(requestCountries())
  } 
}



class App extends Component {



  componentDidMount () {
    this.props.onRequestCountries()
    
  
  }
  
  render () {
    const { searchField, countries, isPending, region } = this.props;
    const filteredCountriesSearchField = countries.filter(country => {
			return country.name.toLowerCase().includes(searchField.toLowerCase());
    })
    const filteredCountriesRegions = filteredCountriesSearchField.filter(country => {
      return country.region.includes(region);
    })

 

    return isPending ?
   (
    <div className="App">
      <Navbar />
      <Segment loading>
      </Segment>
      
    </div>
    ) :
   (
    <div className="App">
      <Navbar />
      <SearchAndFilter />
      <CardList countries = {filteredCountriesRegions} />;
    </div>
  );    
  }

}

export default  connect(mapStateToProps, madDispatchToProps)(App);
