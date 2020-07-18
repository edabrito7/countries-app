import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'
import { setRegion } from '../../actions';

const mapStateToProps = state => {
    return {
        region: state.regionCountries.region,
    }
    
  }
  
  const madDispatchToProps = (dispatch) => {
    return {
      onRegionChange: (event,data) => dispatch(setRegion(data.value))
    } 
  }
const Options = [
    { key: 0, text: 'All', value: '' },
    { key: 1, text: 'Asia', value: 'Asia' },
    { key: 2, text: 'Europe', value: 'Europe' },
    { key: 3, text: 'Americas', value: 'Americas' },
    { key: 4, text: 'Africa', value: 'Africa' },
    { key: 5, text: 'Polar', value: 'Polar' },
  ]


class Filter extends Component {
    render() {
        const { region, onRegionChange } = this.props;
        return(
            <Dropdown placeholder='State' search selection options={Options} 
            onChange={onRegionChange}/>
        )
    }
}

export default connect(mapStateToProps, madDispatchToProps)(Filter);