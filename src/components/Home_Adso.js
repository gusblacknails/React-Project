import React from "react";
var Layout_Home = React.createClass({
  render: function() {
    return (
      <div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
          crossOrigin="anonymous"
        />
        <header>
          <p>NETFLIX</p>
        </header>
        <div className="container">
          <section id="row1">
            <h1 className="sectionTitle">Continue Watching for Username</h1>
            <div id="mySidenav" className="sidenav">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onclick="closeNav()"
              >
                ×
              </a>
              <a href="#">Movie 1</a>
            </div>
            <div className="examples">
              <ul className="img-list">
                <li className="image">
                  <a href="#">
                    <img
                      id="box1"
                      src="http://placehold.it/280x150"
                      width={280}
                      height={150}
                    />
                    <span className="text-content">
                      <span>
                        Title Here...
                        <br />
                        <br />
                        <i className="fa fa-4x  fa-play-circle-o" />
                        <br />
                        <br />
                        <i
                          className="fa fa-chevron-down"
                          onclick="openNav()"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </a>
                </li>
                <li className="image">
                  <a href="#">
                    <img
                      src="http://placehold.it/280x150"
                      width={280}
                      height={150}
                    />
                    <span className="text-content">
                      <span>
                        Title Here...
                        <br />
                        <br />
                        <i className="fa fa-4x  fa-play-circle-o" />
                        <br />
                        <br />
                        <i className="fa fa-chevron-down" aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </li>
                <li className="image">
                  <a href="#">
                    <img
                      src="http://placehold.it/280x150"
                      width={280}
                      height={150}
                    />
                    <span className="text-content">
                      <span>
                        Title Here...
                        <br />
                        <br />
                        <i className="fa fa-4x  fa-play-circle-o" />
                        <br />
                        <br />
                        <i className="fa fa-chevron-down" aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section id="row2">
            <h1 className="sectionTitle">TV Shows</h1>
            <div className="examples">
              <ul className="img-list">
                <li className="image">
                  <a href="#">
                    <img
                      src="http://placehold.it/280x150"
                      width={280}
                      height={150}
                    />
                    <span className="text-content">
                      <span>
                        Title Here...
                        <br />
                        <br />
                        <i className="fa fa-4x  fa-play-circle-o" />
                        <br />
                        <br />
                        <i className="fa fa-chevron-down" aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </li>
                <li className="image">
                  <a href="#">
                    <img
                      src="http://placehold.it/280x150"
                      width={280}
                      height={150}
                    />
                    <span className="text-content">
                      <span>
                        Title Here...
                        <br />
                        <br />
                        <i className="fa fa-4x  fa-play-circle-o" />
                        <br />
                        <br />
                        <i className="fa fa-chevron-down" aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </li>
                <li className="image">
                  <a href="#">
                    <img
                      src="http://placehold.it/280x150"
                      width={280}
                      height={150}
                    />
                    <span className="text-content">
                      <span>
                        Title Here...
                        <br />
                        <br />
                        <i className="fa fa-4x  fa-play-circle-o" />
                        <br />
                        <br />
                        <i className="fa fa-chevron-down" aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <h1 className="sectionTitle">Row 3</h1>
          <div className="examples">
            <ul className="img-list">
              <li className="image">
                <a href="#">
                  <img
                    src="http://placehold.it/280x150"
                    width={280}
                    height={150}
                  />
                  <span className="text-content">
                    <i className="fa fa-chevron-up" aria-hidden="true" />
                    <br />
                    <br />
                    <i className="fa fa-4x  fa-play-circle-o" />
                    <br />
                    <br />
                    Title Here...
                  </span>
                </a>
              </li>
              <li className="image">
                <a href="#">
                  <img
                    src="http://placehold.it/280x150"
                    width={280}
                    height={150}
                  />
                  <span className="text-content">
                    <i className="fa fa-chevron-up" aria-hidden="true" />
                    <br />
                    <br />
                    <i className="fa fa-4x  fa-play-circle-o" />
                    <br />
                    <br />
                    Title Here...
                  </span>
                </a>
              </li>
              <li className="image">
                <a href="#">
                  <img
                    src="http://placehold.it/280x150"
                    width={280}
                    height={150}
                  />
                  <span className="text-content">
                    <i className="fa fa-chevron-up" aria-hidden="true" />
                    <br />
                    <br />
                    <i className="fa fa-4x  fa-play-circle-o" />
                    <br />
                    <br />
                    Title Here...
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
