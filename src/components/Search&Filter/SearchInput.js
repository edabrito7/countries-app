import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { setSearchField } from '../../actions';
 


const mapStateToProps = state => {
    return {
      searchField: state.searchCountries.searchField,
      isLoading: state.searchCountries.isPending,
      result: state.searchCountries.result,
    }
  }
  
  const madDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    } 
  }

{/*const SearchInput = ({searchField, searchChange}) => {
    return (
        <Input 
        icon='search' 
        iconPosition='left' 
        placeholder='Search for a Country' 
        style={{width: "30em"}} 
        size="large"
        onChange={searchChange}
        />
    )
}*/}



class SearchInput extends Component {


    render () {
        const { searchField,isLoading,result, onSearchChange } = this.props;
        return (
            <Input
           
            icon='search' 
            iconPosition='left' 
            placeholder='Search for a Country' 
            style={{width: "30em"}} 
            size="large"
            onChange={onSearchChange}
           
            />
        )

    }




}


export default  connect(mapStateToProps, madDispatchToProps)(SearchInput);