import React, { Component } from "react";
import { updatePagination } from "../../store/actions/pagingAction";

import PropTypes from "prop-types";
import { connect } from "react-redux";

class Pagination extends Component {
  handleSwitchPage = (pageNumber, todoPerPage) => {
    this.props.updatePagination(pageNumber, todoPerPage);
  };
  handleClick = pageNumber => {
    this.handleSwitchPage(pageNumber, this.props.perPage);
  };

  createPageNumbers = () => {
    var pages = [];
    var numberOfPage = Math.ceil(
      this.props.productsLength / this.props.perPage
    );
    for (var i = 1; i <= numberOfPage; i++) {
      pages.push(i);
    }
    return pages.map(this.createPageNumber);
  };

  createPageNumber = number => {
    return (
      <li
        className="page-item disabled"
        onClick={() => this.handleClick(number)}
        key={number}
      >
        <a className="page-link" href="#">
          {number}
        </a>
      </li>
    );
  };

  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          {this.createPageNumbers()}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  updatePagination: PropTypes.func.isRequired,
  pagination: PropTypes.object
};

const mapStateToProps = state => ({
  perPage: state.pagination.payload.perPage
});

export default connect(
  mapStateToProps,
  { updatePagination }
)(Pagination);
