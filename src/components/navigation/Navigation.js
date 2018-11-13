import React, { Component } from "react";
import { searchProducts } from "../../store/actions/productActions";

import { connect } from "react-redux";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  handleInput = event => {
    console.log(event.target.value);
    this.setState({ searchText: event.target.value });
  };
  handleSubmit = () => {
    console.log(this.state.searchText);
    this.props.searchProducts(this.state.searchText);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
          BOOK STORE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="searchBox"
              onChange={this.handleInput}
            />
            <button
              className="btn btn-warning my-2 my-sm-0"
              onClick={this.handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { searchProducts }
)(Navigation);
