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

      /* background: linear-gradient(#eb01a5, #d13531); */
      /* background-image: url(${backgroundImgUrl}); */
      background-image: url(${backgroundImgUrl});
      /* backgroundSize: "cover"; */
      overflow: "hidden";
      width: "720px";
      height: "576px";
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
        <Grid valign="stretch">
          <Grid.Unit size={0.5} style={{ minHeight: "2em" }}>
            <div>
              <h3>Sinópsis</h3>
              <p>{this.props.location.state.data.overview}</p>
              <h3>Reparto</h3>
              <ul>{cast}</ul>
            </div>
          </Grid.Unit>
          <Grid.Unit size={0.5} style={{ minHeight: "6em" }}>
            <StylesDetail />
          </Grid.Unit>
        </Grid>
      </React.Fragment>
    );
  }
}
