import React from "react";

export class ApiCall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: false
    };
  }

  async modb_api_call() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=2761bbed892feda0883ab29f2132b18d&language=en-US&page=1"
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
    // this.modb_api_call();
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
    return <div>{results.original_title}</div>;
  }
}
