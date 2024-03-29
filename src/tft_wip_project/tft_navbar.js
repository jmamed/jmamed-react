import React from 'react';
import { Nav, Navbar} from 'react-bootstrap'; //, Form, FormControl 
import '../App.css';

export const TFTNavBar = () => (
  <Navbar expand="lg" bg="light" variant="light" className="app">
    <Navbar.Brand href="/jmamed-react/#/tft">TFTWorld</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Item><Nav.Link href="/jmamed-react/#/tft">Home</Nav.Link></Nav.Item> 
        <Nav.Item><Nav.Link href="/jmamed-react/#/tft/dummy">BROWSE</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/jmamed-react/#/tft/dummy">BROWSE</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/jmamed-react/#/tft/dummy">BROWSE</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/jmamed-react/#/tft/dummy">BROWSE</Nav.Link></Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)