# MERN Tutorial

- Following Traversy Media's `Learn the MERN Stack` tutorial
- `npm install express body-parser mongoose concurrently`
  - `body-parser` to parse incoming API requests
  - `mongoose` = ORM to interact with MongoDB 
  - `concurrently` will allow us to run more than 1 npm script at a time (the server and client) 
- `npm i -D nodemon` to install it as a dev dependency
- `package.json` scripts:
  - "start": "node server.js",
  - "server": "nodemon server.js"
    - => do `npm run server` to have nodemon start the server (auto refreshes on changes)
- The React app will go in the `client/` directory 
  - to have front end be able to connect to the backend server (without having to type `axios.get("http://localhost:5000/api/get)`) => put `proxy` in `client/package.json`
  - "proxy": "http://localhost:5000"

## Using concurrently

- Run both client and server as node apps at the same time
  - `npm run client` to run `npm start` in the `client/` directory (starting React frontend)
  - `npm run client-install` to install `npm` dependencies in the `client/` directory
  - `npm run dev` to start the server and the client (using `concurrently`)
```json
//package.json
{
  ...
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "client-install": "npm install --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  ...
}
```

## Frontend

- `npm i bootstrap reactstrap uuid react-transition-group`
  - `reactstrap` will let you use Bootstrap as React components [see docs](https://reactstrap.github.io/components/alerts/)
  - `react-transition-group` for some fancy animations

### Navbar using reactstrap

```js
import React, { Component } from 'react';
import {
  Collapse, NavbarToggler,
  Navbar, NavbarBrand, Nav, NavItem, NavLink, Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => { //don't have to bind this!
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() { 
    return <div> 
      <Navbar color="dark" dark expand="sm" className="mb-5"> //margin bottom 5, hamburger menu on small screens, dark attribute for light text
        <Container>
          <NavbarBrand href="/">Shopping list</NavbarBrand>
          <NavbarToggler onClick={this.toggle} /> 
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/jthefang">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  }
}

export default AppNavbar;
```
