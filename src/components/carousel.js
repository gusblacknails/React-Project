import React from "react";
import ReactDOM from "react-dom";
import "../CSS/carrousel.css";
import Slider from "react-styled-carousel";
import { CarouselContent } from "./carrouse_content";
export class Carousel extends React.Component {
  render() {
    const elements = () => {
      const items = [];
      for (var i = 1; i <= 5; i++) {
        items.push(
          <div className="tile">
            <div className="tile__media">
              <img
                className="tile__img"
                src={
                  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-" +
                  i +
                  ".jpg"
                }
                alt
              />
            </div>
            <div className="tile__details">
              <div className="tile__title">Top Gear</div>
            </div>
          </div>
        );
      }

      return <div>{items}</div>;
    };
    console.log(elements());
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
