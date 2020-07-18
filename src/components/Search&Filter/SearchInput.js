import React from 'react';
import { Input } from 'semantic-ui-react'



const SearchInput = () => {
    return (
        <Input 
        icon='search' 
        iconPosition='left' 
        placeholder='Search for a Country' 
        style={{width: "30%"}} 
        size="large"
        />
    )
}


export default SearchInput;