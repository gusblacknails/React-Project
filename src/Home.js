import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(upcoming_query);
      this.setState({ isLoading: true });
      const json = await response.json();
      this.setState({ data: json.results, isLoading: false });
      console.log("ASYNC", this.state.data);
    } catch (err) {
      console.log("Error ==> ", err);
    }
  }

  render() {
    let settings = {
      focusOnSelect: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    let isData = this.state.data;
    let elements = this.state.data.map((data, index) => {
      return (
        <div>
          <img
            className="sliderImage"
            src={"https://image.tmdb.org/t/p/w185/" + data.poster_path}
            alt={"movie_" + index}
          />
        </div>
      );
    });
    console.log(elements);
    return (
      <div>
        <NavigationBar />
        <Estrenos_h1 />
        <Slider {...settings}>{elements}</Slider>
      </div>
    );
  }
}

const Estrenos_h1 = () => (
  <div>
    <h1 className="sectionTitle">Estrenos</h1>
  </div>
);
const NavigationBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      {" "}
      <span className="brand_name_bold">ADSO</span>
      <span className="brand_name_regular">films</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Introduce un título del catálogo"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

const upcoming_query =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=2761bbed892feda0883ab29f2132b18d&language=es&page=1";
