import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import mainLogo from "../images/logo_adso_ok.png";
import "../CSS/navigationBar.css";
import { Link } from "react-router-dom";
export const NavigationBar = () => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="/#home">
      {" "}
      <img alt="Adso Films" src={mainLogo} className="logo" />
      {/* <span className="brand_name_bold">ADSO</span>
      <span className="brand_name_regular">films</span> */}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Catálogo" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Estrenos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Series</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Películas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Documentales</NavDropdown.Item>
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
        <Nav.Link href="#home">Contacto</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Introduce un título del catálogo"
          className="mr-sm-2"
        />
        <i class="fas fa-search" />
      </Form>
    </Navbar.Collapse>
  </Navbar>
);
