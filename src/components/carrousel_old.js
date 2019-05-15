import React from "react";
import ReactDOM from "react-dom";
import "../CSS/carrousel.css";
import Slider from "react-styled-carousel";
export class Carrousel extends React.Component {
  render() {
    const responsive = [
      { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
      { breakPoint: 760, cardsToShow: 2 }
    ];

    return (
      <Slider reponsive={responsive} cardsToShow={1} infinite={true}>
        <div className="row">
          <div className="row__inner">
            <div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row__inner">
            <div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row__inner">
            <div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg"
                    alt
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}
