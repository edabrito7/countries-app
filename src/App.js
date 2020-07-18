import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './components/navigation/navbar';
import SearchAndFilter from './components/Search&Filter/Search&Filter'
import SearchInput from './components/Search&Filter/SearchInput';
import CardList from './components/Cards/cardlist';
import './App.css';
import { setSearchField, requestCountries } from './actions';

const mapStateToProps = state => {
  console.log("State",state.searchField);
  return {
    searchField: state.searchCountries.searchField,
    countries: state.requestCountries.countries,
    isPending: state.requestCountries.isPending,
    error: state.requestCountries.error
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
    const { searchField, countries, isPending } = this.props;
    const filteredCountriesSearchField = countries.filter(country => {
      console.log(country.region)
			return country.name.toLowerCase().includes(searchField.toLowerCase());
    })
    const filteredCountriesRegions = countries.filter(country => {
      return country.region.includes("Europe");
    })

 

    return isPending ?
   (
    <div className="App">
      <Navbar />
      <SearchInput />
      <h1>Loading</h1> 
    
    </div>
    ) :
   (
    <div className="App">
      <Navbar />
      <SearchAndFilter />
      <CardList countries = {filteredCountriesSearchField} />;
    </div>
  );    
  }

}

export default  connect(mapStateToProps, madDispatchToProps)(App);
