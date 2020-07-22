import React from 'react'
import { Menu, Icon, Divider } from 'semantic-ui-react'

import "../../App.css";
import "./navbar.css";

const Navbar = () => (
  <div>
    <Menu fixed='top' vertical fluid>
      <h1>Where in the World?
        <Icon name='globe'/> </h1>
        
      
    </Menu>
    <h4>Made by Eduardo Brito. 2020</h4>
  </div>
    

)

export default Navbar;