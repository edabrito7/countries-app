import React from 'react';
import SearchInput from '../../containers/SearchInput';
import Filter from '../../containers/Filter';
import '../../containers/App.css';
import {Grid} from 'semantic-ui-react';

import './search&filter.css';


const SearchAndFilter = () => {
    return (

        <Grid style={{padding: "3em 2em 3em 3em", width: '100%'}} stackable >
            <Grid.Row columns={2}>
                <Grid.Column width='5'   floated='left'>
                    <SearchInput/>
                </Grid.Column>
                <Grid.Column width='5'  floated='right' className='filter'>
                    <Filter/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    
    )
}


export default SearchAndFilter;