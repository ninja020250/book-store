import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import Pagination from '../components/pagination/Pagination';
import Shelf from "../components/shelf/Shelf";
import Footer from "../components/Footer";
import FloatCart from "./../components/floatCart/FloatCart";
import Navigation from "../components/navigation/Navigation";
import Slider from "../components/slider/Slider";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          {/* <Slider/> */}
          <main>
            <Shelf />
            <Pagination />
          </main>
          
          <Footer />
          <FloatCart />
        </div>
      </Provider>
    );
  }
}

export default App;
