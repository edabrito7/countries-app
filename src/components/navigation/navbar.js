import React from 'react'
import { Button, Icon, Divider } from 'semantic-ui-react'

import "../../App.css";
import "./navbar.css";

const Navbar = () => (
  <div className="Zone">
    <nav >
      <h1>Where in the World?</h1>
      
        {/*<Button icon labelPosition='left' basic >
          <Icon  name='moon outline'   />
          Dark Mode
</Button>*/}
      
    </nav>
    <Divider/>
  </div>
)

export default Navbar;