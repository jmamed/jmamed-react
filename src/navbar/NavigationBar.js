import React from 'react';
import { Nav, Navbar} from 'react-bootstrap'; //, Form, FormControl 
import '../App.css';

export const NavigationBar = () => (
  <Navbar expand="lg" className="app">
    <header>
      <h1 className="navTitle">Welcome to Jason Mamed's React App</h1>
    </header>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    {/* <Form className="form-center">
      <FormControl type="text" placeholder="Search" className="" />
    </Form> */}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/jmamed-react">Home</Nav.Link></Nav.Item> 
        <Nav.Item><Nav.Link href="/tft">TFT WIP</Nav.Link></Nav.Item>
        <a className="button" href="https://jmamed.github.io/jmamed/"><span><h4 className="webButton">Angular Website</h4></span></a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)