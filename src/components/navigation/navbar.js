import React from 'react'
import { Button, Icon, Divider } from 'semantic-ui-react'
import "../../App.css";
import "./navbar.css";

const Navbar = () => (
  <div className="Zone">
    <nav className="bar">
      <h1>Where in the World?</h1>
      <div className="container">
        <Button icon labelPosition='left' basic >
          <Icon  name='moon outline'  />
          Dark Mode
        </Button>
      </div>
    </nav>
    <Divider/>
  </div>
)

export default Navbar;