import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";

import Shelf from "../components/shelf/Shelf";
import Footer from "../components/Footer";
import FloatCart from "./../components/floatCart/FloatCart";
import Navigation from "../components/navigation/Navigation";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <main>
            <Shelf />
          </main>
          <Footer />
          <FloatCart />
        </div>
      </Provider>
    );
  }
}

export default App;
