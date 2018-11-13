import React, { Component } from "react";

var styleImg = {
  height: 550,
  width: "100%"
};
const styleContainer = {
  backgroundColor: "rgb(239, 240, 245)"
};

const styleSlider = {
  width: "85%",
  margin: "auto"
};

class Slider extends Component {
  render() {
    return (
      <div className="slider-container" style={styleContainer}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          style={styleSlider}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={styleImg}
                className="d-block w-100"
                src={require(`../../static/sliders/slide1.png?auto=yes&bg=666&fg=444&text=First slide`)}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                style={styleImg}
                className="d-block w-100"
                src={require(`../../static/sliders/slide2.jpg?auto=yes&bg=666&fg=444&text=First slide`)}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                style={styleImg}
                className="d-block w-100"
                src={require(`../../static/sliders/slide3.png?auto=yes&bg=666&fg=444&text=First slide`)}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
export default Slider;
