import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react'

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





class SearchInput extends Component {


    render () {
        const {  onSearchChange } = this.props;
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