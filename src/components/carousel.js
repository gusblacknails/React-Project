import React from "react";
import "../CSS/carrousel.css";

const upcoming_query =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=2761bbed892feda0883ab29f2132b18d&language=es&page=1";

export class Upcoming_Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: false
    };
  }

  async latest_api_call(query) {
    fetch(query)
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
    this.latest_api_call(upcoming_query);
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

    return (
      <div className="contain">
        <div className="row">
          <h1 className="sectionTitle">Estrenos</h1>
          <div className="row__inner">{elements()}</div>
        </div>
      </div>
    );
  }
}
