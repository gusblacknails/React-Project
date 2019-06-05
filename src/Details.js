import React from "react";
import "./CSS/details.css";
import styled from "styled-components";
import Grid from "styled-components-grid";
import Loader from "react-loader-spinner";
export class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { details: [], credits: [] },
      isLoading: true,
      componentName: null
    };

    console.log("This is my initializer");
  }

  async componentDidMount() {
    try {
      const credits_query =
        "https://api.themoviedb.org/3/movie/" +
        this.props.location.state.data.id +
        "/credits?api_key=" +
        process.env.REACT_APP_MOVIEDB_API_KEY +
        "&language=ES";
      const details_query =
        "https://api.themoviedb.org/3/movie/" +
        this.props.location.state.data.id +
        "?api_key=" +
        process.env.REACT_APP_MOVIEDB_API_KEY +
        "&language=ES";
      const details_response = await fetch(details_query);
      const credits_response = await fetch(credits_query);
      this.setState({ isLoading: true });
      const details_json = await details_response.json();
      const credits_json = await credits_response.json();
      console.log(credits_json);
      this.setState({
        data: { credits: credits_json, details: details_json },
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
      background-image: linear-gradient(
          to left,
          rgba(0, 0, 0, 0) 5%,
          rgba(13, 15, 17, 100)
        ),
        url(${backgroundImgUrl});
      background-position: center center;
      width: 100%;
      height: 100%;
    `;

    //ALL CAST WITH PHOTO DETAIL
    // const cast = this.state.data.cast.map((data, index) => {
    //   return (
    //     <li>
    //       <img
    //         className="avatar"
    //         src={"https://image.tmdb.org/t/p/w45/" + data.profile_path}
    //         alt={"movie_" + index}
    //       />
    //       <span>
    //         {data.name} --> {data.character}
    //       </span>
    //     </li>
    //   );
    // });

    if (this.state.isLoading) {
      return <span>Loading</span>;
    }
    if (this.state.isLoading == false) {
      let release_date = this.state.data.details.release_date.split("-");
      let duration = " " + this.state.data.details.runtime + " min";
      //GENRES DETAIL
      let genres_correct = [];
      this.state.data.details.genres.map(data => {
        genres_correct.push(data.name);
      });
      genres_correct = genres_correct.join(", ");
      console.log("GENRES:", genres_correct);
      return (
        <React.Fragment>
          <Grid halign="justify">
            <Grid.Unit
              size={3 / 6}
              style={{ minHeight: "45em", padding: "2em" }}
            >
              <h3>{this.props.location.state.data.title}</h3>
              <div className="title_bottom_info">
                <span className="gray_text">{release_date[0]}</span>
                <span className="gray_text">{duration}</span>
              </div>

              <p className="sinopsis">
                {this.props.location.state.data.overview}
              </p>
              <Grid halign="left">
                <Grid.Unit size={0.25}>
                  <span className="gray_text">Director</span>
                </Grid.Unit>
                <Grid.Unit size={0.75}>
                  <span>{this.state.data.credits.crew[0].name}</span>
                </Grid.Unit>
              </Grid>
              <Grid halign="left">
                <Grid.Unit size={0.25}>
                  <span className="gray_text">Reparto</span>
                </Grid.Unit>
                <Grid.Unit size={0.75}>
                  <span>
                    {this.state.data.credits.cast[0].name},
                    {" " + this.state.data.credits.cast[1].name},
                    {" " + this.state.data.credits.cast[2].name}...
                  </span>
                </Grid.Unit>
              </Grid>
              <Grid halign="left">
                <Grid.Unit size={0.25}>
                  <span className="gray_text">Géneros</span>
                </Grid.Unit>
                <Grid.Unit size={0.75}>{genres_correct}</Grid.Unit>
              </Grid>
              <Grid halign="left">
                <Grid.Unit size={0.25}>
                  <span className="gray_text">Título Original</span>
                </Grid.Unit>
                <Grid.Unit size={0.75}>
                  <span>{this.state.data.details.original_title}</span>
                </Grid.Unit>
              </Grid>

              {/* <div className="sinopsis_bottom_info">
                <div>
                  <span className="gray_text">Director</span>
                </div>
                <div>
                  <span className="gray_text">Reparto</span>
                </div>
                <div>
                  <span className="gray_text">Géneros</span>
                </div>
              </div> */}

              {/* <h3>Reparto</h3> */}
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
}
