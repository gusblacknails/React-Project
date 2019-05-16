import React from "react";
import ReactDOM from "react-dom";
import "../CSS/carrousel.css";
import Slider from "react-styled-carousel";
import { CarouselContent } from "./carousel_content";
import ApiCall from "./api_call";

export class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: false
    };
  }

  async modb_api_call() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=2761bbed892feda0883ab29f2132b18d&language=es&page=1"
    )
      .then(response => {
        this.setState({ isLoading: true });
        if (response.ok) {
          return response.json();
        } else {
          console.log("Something went wrong ...");
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ results: data.results, isLoading: false }));
  }
  componentDidMount() {
    this.modb_api_call();
  }
  render() {
    let { results, isLoading, error } = this.state;
    console.log(results);
    if (error) {
      console.log(error);
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      console.log("Loading");
      return <p>Loading ...</p>;
    }
    const elements = () => {
      const items = [];
      for (const [index, value] of results.entries()) {
        items.push(
          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src={
                  "https://image.tmdb.org/t/p/w500/" +
                  results[index].poster_path
                }
                alt
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">{results[index].title}</div>
            </div>
          </div>
        );
      }

      return <div>{items}</div>;
    };
    const responsive = [
      { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
      { breakPoint: 760, cardsToShow: 2 }
    ];

    return (
      <Slider reponsive={responsive} cardsToShow={1} infinite={true}>
        <div className="row">
          <div className="row__inner">
            <div>{elements()}</div>
          </div>
        </div>
        <div className="row">
          <div className="row__inner">
            <div>{elements()}</div>
          </div>
        </div>
        <div className="row">
          <div className="row__inner">
            <div>{elements()}</div>
          </div>
        </div>
        <div className="row">
          <div className="row__inner">
            <div>{elements()}</div>
          </div>
        </div>
      </Slider>
    );
  }
}
