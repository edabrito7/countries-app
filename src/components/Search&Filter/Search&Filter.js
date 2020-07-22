import React from 'react';
import SearchInput from './SearchInput';
import Filter from './Filter';
import '../../App.css';
import {Grid} from 'semantic-ui-react';


const SearchAndFilter = () => {
    return (

        <Grid style={{padding: "3em"}}  stackable relaxed>
            <Grid.Row columns={2}>
                <Grid.Column mobile={16} tablet={8} computer={6} floated='left'>
                    <SearchInput/>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={4} floated='right'>
                    <Filter/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    
    )
}


export default SearchAndFilter;