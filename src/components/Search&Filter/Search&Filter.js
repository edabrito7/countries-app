import React from 'react';
import SearchInput from './SearchInput';
import Filter from './Filter';
import '../../App.css';


const SearchAndFilterStyle = {
    padding: "1em 2.5em",
  };

const SearchAndFilter = () => {
    return (
        <div className="bar" style={SearchAndFilterStyle}>
            <SearchInput/>
            <Filter/>
        </div>
    )
}


export default SearchAndFilter;