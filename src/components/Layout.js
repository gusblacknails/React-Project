import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "../CSS/layout.css";

const Layout = props => (
  <Jumbotron className="d-flex align-items-center">
    <Container ClassName="d-flex">{props.children}</Container>
  </Jumbotron>
);
export default Layout;
