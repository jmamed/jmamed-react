import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'; //, Form, FormControl

import '../App.css';

export const NavigationBar = () => (
  <Navbar expand="lg" bg="dark" variant="dark" className="app">
    <Navbar.Brand href="/jmamed-react/#/">Welcome to Jason Mamed's React App</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Item>
          <Nav.Link href="/jmamed-react/#/">Home</Nav.Link>
        </Nav.Item> 
        <Nav.Item>
          <Nav.Link href="/jmamed-react/#/tft">TFT Project Idea</Nav.Link>
        </Nav.Item>
        <a className="button" href="https://jmamed.github.io/jmamed/"><span><h4 className="webButton">Angular Website</h4></span></a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)