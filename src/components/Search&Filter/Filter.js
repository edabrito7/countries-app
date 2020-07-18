import React from 'react';
import { Dropdown } from 'semantic-ui-react'


const Options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]
const Filter = () => {
    return (
        <Dropdown placeholder='State' search selection options={Options} />
    )
} 



export default Filter;