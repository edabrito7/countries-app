import React, { Component } from 'react';
import Navbar from './components/navigation/navbar';
import SearchAndFilter from './components/Search&Filter/Search&Filter'
import CardList from './components/Cards/cardlist';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchInput: '',
    }
  }


  componentDidMount () {
    fetch('https://restcountries.eu/rest/v2/regionalbloc/eu').then(response =>{
      return response.json()
    })
    .then(users => {
        this.setState({countries: users})
        console.log(users);
        console.log("COlombia", this.state.countries.name)
    })
    
  
  }
  
  render () {
  return (
    <div className="App">
      <Navbar />
      <SearchAndFilter/>
      <CardList countries = {this.state.countries} />
    </div>
  );    
  }

}

export default App;
