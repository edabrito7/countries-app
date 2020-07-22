import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";



const Borders = ({border}) => {
    
    return (
        <Grid.Column>
            <Link to={{pathname:`/cardinfo/${border}`, state:{"name": border }}} style={{color: "black"}}>
            {border}
            </Link>
        </Grid.Column>
    )
}


export default Borders;