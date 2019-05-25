import React from "react";
export class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log("This is my initializer");
  }
  componentDidMount() {
    const { name } = this.props.location.state;
  }
  render() {
    console.log(this.props.location.state.data);
    // let { detailData } = this.props.loaction.state;
    return (
      <div>
        <p>{this.props.location.state.data.release_date}</p>
      </div>
    );
  }
}
