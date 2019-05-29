import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

require("dotenv").config();

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
      slidesToShow: 6,
      slidesToScroll: 6,
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
    let elements = this.state.data.map((data, index) => {
      return (
        <Link
          to={{
            pathname: "./details/" + data.title.replace(/ /g, "-"),
            state: {
              data: data
            }
          }}
        >
          <div className="containerImage" key={index}>
            <img
              className="sliderImage"
              src={"https://image.tmdb.org/t/p/w185/" + data.poster_path}
              alt={"movie_" + index}
            />

            <div className="titleDiv">{data.title}</div>
          </div>
        </Link>
      );
    });
    console.log(elements);
    return (
      <div>
        <EstrenosTitle />
        <Slider {...settings}>{elements}</Slider>
      </div>
    );
  }
}

const EstrenosTitle = () => (
  <div>
    <h1 className="sectionTitle">Estrenos</h1>
  </div>
);

const upcoming_query =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
  process.env.REACT_APP_MOVIEDB_API_KEY +
  "&language=es&page=1";
