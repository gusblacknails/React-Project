import React from "react";
import "./CSS/details.css";
import styled from "styled-components";
import Grid from "styled-components-grid";
export class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      componentName: null
    };

    console.log("This is my initializer");
  }

  async componentDidMount() {
    try {
      const details_query =
        "https://api.themoviedb.org/3/movie/" +
        this.props.location.state.data.id +
        "/credits?api_key=" +
        process.env.REACT_APP_MOVIEDB_API_KEY +
        "&language=ES";

      const response = await fetch(details_query);
      this.setState({ isLoading: true });
      const json = await response.json();
      console.log(json);
      this.setState({
        data: json.cast,
        isLoading: false,
        componentName: this.props.location.state.data.title
      });
      console.log("ASYNC", this.state.data);
    } catch (err) {
      console.log("Error ==> ", err);
    }
  }

  render() {
    const backgroundImgUrl =
      "https://image.tmdb.org/t/p/w1280" +
      this.props.location.state.data.backdrop_path;
    const StylesDetail = styled.div`
      
      /* background: rgba(255,0,0,0); */
      /* background-image: url(${backgroundImgUrl}); */
      background-image: linear-gradient(to left, rgba(0,0,0, 0) 5%, rgba(13,15,17, 100)), url(${backgroundImgUrl});
      /* background-size: "cover"; */
      /* background-repeat:no-repeat; */
      background-position: center center;
      width: 100%; 
      height: 100%;
      /* background-image: url(${backgroundImgUrl}), linear-gradient(#eb01a5, #d13531); */
      
    `;

    const cast = this.state.data.map((data, index) => {
      return (
        <li>
          <img
            className="avatar"
            src={"https://image.tmdb.org/t/p/w45/" + data.profile_path}
            alt={"movie_" + index}
          />
          <span>
            {data.name} --> {data.character}
          </span>
        </li>
      );
    });

    return (
      <React.Fragment>
        <Grid halign="justify">
          <Grid.Unit size={3 / 6} style={{ minHeight: "45em" }}>
            <h3>Sinópsis</h3>
            <p>{this.props.location.state.data.overview}</p>
            <h3>Reparto</h3>
            {/* <ul>{cast}</ul> */}
          </Grid.Unit>
          <Grid.Unit size={3 / 6} style={{ minHeight: "45em" }}>
            <StylesDetail>{/* <ul>{cast}</ul> */}</StylesDetail>
          </Grid.Unit>
        </Grid>
      </React.Fragment>
    );
  }
}
